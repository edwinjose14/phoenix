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
    public class CopiasController:ControllerBase
    {
         private readonly CopiasContext _context;

         public CopiasController(CopiasContext context){

             _context = context;

             if(_context.CopiasItems.Count()==0){
                   _context.SaveChanges();
             }
         }

         [HttpPost]
        public async Task<ActionResult<CopiasItem>> Post(CopiasItem item)
        {
            _context.CopiasItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAutor), new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, CopiasItem item)
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
        public async Task<ActionResult<IEnumerable<CopiasItem>>> GetAutores()
        {
            return await _context.CopiasItems.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CopiasItem>> GetAutor(int id)
        {
            var autorItem = await _context.CopiasItems.FindAsync(id);

            if (autorItem == null)
            {
                return NotFound();
            }
            
            return autorItem;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var copiasItem = await _context.CopiasItems.FindAsync(id);

            if (copiasItem == null)
            {
                return NotFound();
            }

            _context.CopiasItems.Remove(copiasItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }


    }
}