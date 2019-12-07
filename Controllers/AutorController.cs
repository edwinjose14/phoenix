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
    public class AutorController:ControllerBase
    {
        
         private readonly AutorContext _context;

         public AutorController(AutorContext context){

             _context = context;

             if(_context.AutorItems.Count()==0){
                   _context.SaveChanges();
             }
         }

         [HttpPost]
        public async Task<ActionResult<AutorItem>> Post(AutorItem item)
        {
            _context.AutorItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAutor), new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, AutorItem item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AutorItem>>> GetAutores()
        {
            return await _context.AutorItems.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AutorItem>> GetAutor(int id)
        {
            var autorItem = await _context.AutorItems.FindAsync(id);

            if (autorItem == null)
            {
                return NotFound();
            }
            
            return autorItem;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var autorItem = await _context.AutorItems.FindAsync(id);

            if (autorItem == null)
            {
                return NotFound();
            }

            _context.AutorItems.Remove(autorItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}