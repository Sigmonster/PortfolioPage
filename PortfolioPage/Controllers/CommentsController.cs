﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using PortfolioPage.Models;
using PortfolioPage.Models.CodeFirst;
using Microsoft.AspNet.Identity;
using PagedList;

namespace PortfolioPage.Controllers
{
    [RequireHttps]
    public class CommentsController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Comments
        public ActionResult Index(int? page)
        {
            var comments = db.Comments.Include(c => c.Author).Include(c => c.Post);
            return View(comments); 
        }

        //public ActionResult BlogPostComments(int? id, int? page)
        //{
           //int pageSize = 6; // display three blog posts at a time on this page
           //int pageNumber = (page ?? 1);
           //var post = db.Posts.Find(id);
           //var comments = post.Comments.OrderByDescending(p => p.Created).ToPagedList(pageNumber, pageSize);
           //return View(comments);//pagelist needs view work
        //}

        // GET: Comments/Details/5
        [Authorize(Roles = "Moderator, Admin")]
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Comment comment = db.Comments.Find(id);
            if (comment == null)
            {
                return HttpNotFound();
            }
            return View(comment);
        }

        // GET: Comments/Create
        //public ActionResult Create()
        //{
        //    ViewBag.AuthorId = new SelectList(db.Users, "Id", "FirstName");
        //    ViewBag.PostId = new SelectList(db.Posts, "Id", "Title");
        //    return View();
        //}
        [Authorize]
        public ActionResult Create(int id)
        {

            Comment model = new Comment();
            model.PostId = id;
            return View(model);

        }

        // POST: Comments/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize]
        public ActionResult Create([Bind(Include = "Id,PostId,AuthorId,Body,Created,Updated,UpdateReason")] Comment comment)
        {

            if (ModelState.IsValid)
            {
                comment.Created = DateTimeOffset.Now;
                comment.AuthorId = User.Identity.GetUserId();
                comment.Updated = null;
                comment.UpdateReason = null;

                db.Comments.Add(comment);
                db.SaveChanges();

                var postid = comment.PostId;
                var model = db.Posts.Find(postid);
                var slugid = model.Slug;
                return RedirectToAction("Details", "BlogPosts", routeValues: new { slug = slugid });
            }
            return RedirectToAction("Index", "BlogPosts");

            //if (ModelState.IsValid)
            //{
            //    db.Comments.Add(comment);
            //    db.SaveChanges();
            //    return RedirectToAction("Index");
            //}

            //ViewBag.AuthorId = new SelectList(db.ApplicationUsers, "Id", "FirstName", comment.AuthorId);
            //ViewBag.PostId = new SelectList(db.Posts, "Id", "Title", comment.PostId);
            //return View(comment);
        }

        // GET: Comments/Edit/5
        [Authorize(Roles = "Moderator, Admin")]
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Comment comment = db.Comments.Find(id);
            if (comment == null)
            {
                return HttpNotFound();
            }
            ViewBag.AuthorId = new SelectList(db.Users, "Id", "FirstName", comment.AuthorId);
            ViewBag.PostId = new SelectList(db.Posts, "Id", "Title", comment.PostId);
            return View(comment);
        }

        // POST: Comments/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Moderator, Admin")]
        public ActionResult Edit([Bind(Include = "Id,PostId,AuthorId,Body,Created,Updated,UpdateReason")] Comment comment)
        {
            if (ModelState.IsValid)
            {
                db.Entry(comment).State = EntityState.Modified;
                comment.Updated = DateTimeOffset.Now;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.AuthorId = new SelectList(db.ApplicationUsers, "Id", "FirstName", comment.AuthorId);
            ViewBag.PostId = new SelectList(db.Posts, "Id", "Title", comment.PostId);
            return View(comment);
        }

        // GET: Comments/Delete/5
        [Authorize(Roles = "Moderator, Admin")]
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Comment comment = db.Comments.Find(id);
            if (comment == null)
            {
                return HttpNotFound();
            }
            return View(comment);
        }

        // POST: Comments/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Moderator, Admin")]
        public ActionResult DeleteConfirmed(int id)
        {
            Comment comment = db.Comments.Find(id);
            db.Comments.Remove(comment);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
