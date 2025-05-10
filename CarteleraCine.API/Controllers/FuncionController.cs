using CarteleraCine.API.Data;
using CarteleraCine.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CarteleraCine.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FuncionController : ControllerBase
    {
        private readonly AppDBContext _context;

        public FuncionController(AppDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Funcion>>> GetFunciones()
        {
            var funciones = await _context.Funciones
                .Include(f => f.Pelicula)  
                .Include(f => f.Sala)      
                .ToListAsync();

            return funciones;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Funcion>> GetFuncion(int id)
        {
            var funcion = await _context.Funciones
                .Include(f => f.Pelicula)  
                .Include(f => f.Sala)      
                .FirstOrDefaultAsync(f => f.Id == id);

            if (funcion == null)
            {
                return NotFound();
            }

            return funcion;
        }

        [HttpPost]
        public async Task<ActionResult<Funcion>> PostFuncion(Funcion funcion)
        {
            var pelicula = await _context.Peliculas.FindAsync(funcion.PeliculaId);
            var sala = await _context.Salas.FindAsync(funcion.SalaId);

            if (pelicula == null || sala == null)
            {
                return BadRequest("La película o la sala no existen.");
            }

            _context.Funciones.Add(funcion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFuncion", new { id = funcion.Id }, funcion);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFuncion(int id)
        {
            var funcion = await _context.Funciones.FindAsync(id);
            if (funcion == null)
            {
                return NotFound();
            }

            _context.Funciones.Remove(funcion);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
