using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PortfolioPage.Startup))]
namespace PortfolioPage
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
