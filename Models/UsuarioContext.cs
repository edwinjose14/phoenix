using Microsoft.EntityFrameworkCore;

namespace PhoenixNet.Models
{
    public class UsuarioContext:DbContext
    {
        public UsuarioContext(DbContextOptions<UsuarioContext> options):base(options){ }
        public DbSet<UsuarioItem> UsuarioItems {get;set;}        
    }
}