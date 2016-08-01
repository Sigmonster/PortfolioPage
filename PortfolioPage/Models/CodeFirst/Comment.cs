using System;
using System.ComponentModel.DataAnnotations;

namespace PortfolioPage.Models.CodeFirst
{
    public class Comment
    {
        public int Id { get; set; }
        [Require]
        public int PostId { get; set; }
        [Require]
        public string AuthorId { get; set; }
        [Require]
        public string Body { get; set; }
        [Require]
        [DisplayFormat(DataFormatString = "{0:MMM dd}", ApplyFormatInEditMode = true)]
        public DateTimeOffset Created { get; set; }
        [DisplayFormat(DataFormatString = "{0:MMM dd}", ApplyFormatInEditMode = true)]
        public DateTimeOffset? Updated { get; set; }
        public string UpdateReason { get; set; }
        public virtual ApplicationUser Author { get; set; }
        public virtual BlogPost Post { get; set; }
    }
}