using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace PortfolioPage.Models
{
    //[AttributeUsage(AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Parameter, AllowMultiple = false)]
    public class UniqueDisplayName : ValidationAttribute
    {
        ApplicationDbContext db = new ApplicationDbContext();

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            string sErrorMessage = "That DisplayName is not available.";
            if (value != null)
            {
                if (db.Users.Any(u => u.DisplayName == value.ToString()))
                {
                    return new ValidationResult(sErrorMessage);
                }
                return ValidationResult.Success;
            }
            else
            {
                return new ValidationResult("" + validationContext.DisplayName + " is required");
            }
        }
    }

}