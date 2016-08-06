using System;
using System.ComponentModel.DataAnnotations;

namespace PortfolioPage.Models.CodeFirst
{
    public class Comment
    {
        public int Id { get; set; }
        [Required]
        public int PostId { get; set; }//foreign key
        [Required]
        public string AuthorId { get; set; }
        [Required]
        public string Body { get; set; }
        [Required]
        [DisplayFormat(DataFormatString = "{0:MMM dd}", ApplyFormatInEditMode = true)]
        public DateTimeOffset Created { get; set; }
        [DisplayFormat(DataFormatString = "{0:MMM dd}", ApplyFormatInEditMode = true)]
        public DateTimeOffset? Updated { get; set; }
        public string UpdateReason { get; set; }
        public virtual ApplicationUser Author { get; set; }
        public virtual BlogPost Post { get; set; }//Holds Associated BlogPost
    }
}