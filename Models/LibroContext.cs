using Microsoft.EntityFrameworkCore;
namespace PhoenixNet.Models
{
    public class LibroContext: DbContext
    {
        public LibroContext(DbContextOptions<LibroContext> options):base(options){ }
        public DbSet<LibroItem> LibroItems {get;set;}
    }
}