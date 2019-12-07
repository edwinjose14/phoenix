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
    public class EditorialController: ControllerBase
    {
        private readonly EditorialContext _context;

         public EditorialController(EditorialContext context){

             _context = context;

             if(_context.EditorialItems.Count()==0){
                   _context.SaveChanges();
             }
         }

         [HttpPost]
        public async Task<ActionResult<EditorialItem>> Post(EditorialItem item)
        {
            _context.EditorialItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetEditorial), new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, EditorialItem item)
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
        public async Task<ActionResult<IEnumerable<EditorialItem>>> GetEditoriales()
        {
            return await _context.EditorialItems.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EditorialItem>> GetEditorial(int id)
        {
            var editorialItem = await _context.EditorialItems.FindAsync(id);

            if (editorialItem == null)
            {
                return NotFound();
            }
            
            return editorialItem;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var editorialItem = await _context.EditorialItems.FindAsync(id);

            if (editorialItem == null)
            {
                return NotFound();
            }

            _context.EditorialItems.Remove(editorialItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }   
    }
}