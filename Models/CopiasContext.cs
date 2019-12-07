using Microsoft.EntityFrameworkCore;

namespace PhoenixNet.Models
{
    public class CopiasContext: DbContext
    {
        public CopiasContext(DbContextOptions<CopiasContext> options):base(options){ }
        public DbSet<CopiasItem> CopiasItems {get;set;}
    }
}