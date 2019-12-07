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
    public class DevolucionController:ControllerBase
    {
       
         private readonly DevolucionContext _context;

         public DevolucionController(DevolucionContext context){

             _context = context;

             if(_context.DevolucionItems.Count()==0){
                   _context.SaveChanges();
             }
         }

         [HttpPost]
        public async Task<ActionResult<DevolucionItem>> Post(DevolucionItem item)
        {
            _context.DevolucionItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetDevolucion), new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, DevolucionItem item)
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
        public async Task<ActionResult<IEnumerable<DevolucionItem>>> GetDevoluciones()
        {
            return await _context.DevolucionItems.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<DevolucionItem>> GetDevolucion(int id)
        {
            var devolucionItem = await _context.DevolucionItems.FindAsync(id);

            if (devolucionItem == null)
            {
                return NotFound();
            }
            
            return devolucionItem;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var devolucionItem = await _context.DevolucionItems.FindAsync(id);

            if (devolucionItem == null)
            {
                return NotFound();
            }

            _context.DevolucionItems.Remove(devolucionItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }   
    }
}