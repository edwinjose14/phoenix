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
    public class LoginController:ControllerBase
    {
         private readonly LoginContext _context;

         public LoginController(LoginContext context){

             _context = context;

             if(_context.LoginItems.Count()==0){
                   _context.SaveChanges();
             }
         }

         [HttpPost]
        public async Task<ActionResult<LoginItem>> Post(LoginItem item)
        {
            _context.LoginItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetLogin), new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, LoginItem item)
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
        public async Task<ActionResult<IEnumerable<LoginItem>>> GetLogins()
        {
            return await _context.LoginItems.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<LoginItem>> GetLogin(int id)
        {
            var loginItem = await _context.LoginItems.FindAsync(id);

            if (loginItem == null)
            {
                return NotFound();
            }
            
            return loginItem;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var loginItem = await _context.LoginItems.FindAsync(id);

            if (loginItem == null)
            {
                return NotFound();
            }

            _context.LoginItems.Remove(loginItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }   
    }
}