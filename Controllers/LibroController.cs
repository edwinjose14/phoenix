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
    public class LibroController: ControllerBase
    {
        private readonly LibroContext _context;

         public LibroController(LibroContext context){

             _context = context;

             if(_context.LibroItems.Count()==0){
                   _context.SaveChanges();
             }
         }

         [HttpPost]
        public async Task<ActionResult<LibroItem>> Post(LibroItem item)
        {
            _context.LibroItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetLibro), new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, LibroItem item)
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
        public async Task<ActionResult<IEnumerable<LibroItem>>> GetLibros()
        {
            return await _context.LibroItems.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<LibroItem>> GetLibro(int id)
        {
            var editorialItem = await _context.LibroItems.FindAsync(id);

            if (editorialItem == null)
            {
                return NotFound();
            }
            
            return editorialItem;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var libroItem = await _context.LibroItems.FindAsync(id);

            if (libroItem == null)
            {
                return NotFound();
            }

            _context.LibroItems.Remove(libroItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }   
    }
}