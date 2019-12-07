using Microsoft.EntityFrameworkCore;
namespace PhoenixNet.Models
{
    public class EditorialContext: DbContext
    {
        public EditorialContext(DbContextOptions<EditorialContext> options):base(options){ }
        public DbSet<EditorialItem> EditorialItems {get;set;}
    }
}