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

        // GET: api/Funcion
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Funcion>>> GetFunciones()
        {
            var funciones = await _context.Funciones
                .Include(f => f.Pelicula)  // Incluir la película relacionada
                .Include(f => f.Sala)      // Incluir la sala relacionada
                .ToListAsync();

            return funciones;
        }

        // GET: api/Funcion/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Funcion>> GetFuncion(int id)
        {
            var funcion = await _context.Funciones
                .Include(f => f.Pelicula)  // Incluir la película relacionada
                .Include(f => f.Sala)      // Incluir la sala relacionada
                .FirstOrDefaultAsync(f => f.Id == id);

            if (funcion == null)
            {
                return NotFound();
            }

            return funcion;
        }

        // POST: api/Funcion
        [HttpPost]
        public async Task<ActionResult<Funcion>> PostFuncion(Funcion funcion)
        {
            // Validación: Verificar que la Película y la Sala existen
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

        // DELETE: api/Funcion/5
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
