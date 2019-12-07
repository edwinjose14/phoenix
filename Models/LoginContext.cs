using Microsoft.EntityFrameworkCore;
namespace PhoenixNet.Models
{
    public class LoginContext:DbContext
    {
        public LoginContext(DbContextOptions<LoginContext> options):base(options){ }
        public DbSet<LoginItem> LoginItems {get;set;}
    }
}