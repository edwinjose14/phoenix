using Microsoft.EntityFrameworkCore;
namespace PhoenixNet.Models
{
    public class DevolucionContext: DbContext
    {
        public DevolucionContext(DbContextOptions<DevolucionContext> options):base(options){ }
        public DbSet<DevolucionItem> DevolucionItems {get;set;}
    }
}