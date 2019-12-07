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
    public class PrestamoController:ControllerBase
    {
         private readonly PrestamoContext _context;

         public PrestamoController(PrestamoContext context){

             _context = context;

             if(_context.PrestamoItems.Count()==0){
                   _context.SaveChanges();
             }
         }

         [HttpPost]
        public async Task<ActionResult<PrestamoItem>> Post(PrestamoItem item)
        {
            _context.PrestamoItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPrestamo), new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, PrestamoItem item)
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
        public async Task<ActionResult<IEnumerable<PrestamoItem>>> GetPrestamos()
        {
            return await _context.PrestamoItems.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PrestamoItem>> GetPrestamo(int id)
        {
            var prestamoItem = await _context.PrestamoItems.FindAsync(id);

            if (prestamoItem == null)
            {
                return NotFound();
            }
            
            return prestamoItem;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var prestamoItem = await _context.PrestamoItems.FindAsync(id);

            if (prestamoItem == null)
            {
                return NotFound();
            }

            _context.PrestamoItems.Remove(prestamoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }   
    }
}