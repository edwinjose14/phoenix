using Microsoft.EntityFrameworkCore;
namespace PhoenixNet.Models
{
    public class PrestamoContext:DbContext
    {
        public PrestamoContext(DbContextOptions<PrestamoContext> options):base(options){ }
        public DbSet<PrestamoItem> PrestamoItems {get;set;}
    }
}