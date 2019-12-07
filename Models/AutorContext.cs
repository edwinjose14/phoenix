using Microsoft.EntityFrameworkCore;

namespace PhoenixNet.Models
{
    public class AutorContext: DbContext
    {
        public AutorContext(DbContextOptions<AutorContext> options):base(options){ }
        public DbSet<AutorItem> AutorItems {get;set;}
    }
}