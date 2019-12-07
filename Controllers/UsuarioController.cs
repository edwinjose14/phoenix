using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PhoenixNet.Models;

namespace PhoenixNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController:ControllerBase
    {
        
         private readonly UsuarioContext _context;

         public UsuarioController(UsuarioContext context){

             _context = context;

             if(_context.UsuarioItems.Count()==0){
                   _context.SaveChanges();
             }
         }

         [HttpPost]
        public async Task<ActionResult<UsuarioItem>> Post(UsuarioItem item)
        {
            _context.UsuarioItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetUsuario), new { identificacion = item.Identificacion }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, UsuarioItem item)
        {
            if (id != item.Identificacion)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UsuarioItem>>> GetUsuarios()
        {
            return await _context.UsuarioItems.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<UsuarioItem>> GetUsuario(string id)
        {
            var usuarioItem = await _context.UsuarioItems.FindAsync(id);

            if (usuarioItem == null)
            {
                return NotFound();
            }
            
            return usuarioItem;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var usuarioItem = await _context.UsuarioItems.FindAsync(id);

            if (usuarioItem == null)
            {
                return NotFound();
            }

            _context.UsuarioItems.Remove(usuarioItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}