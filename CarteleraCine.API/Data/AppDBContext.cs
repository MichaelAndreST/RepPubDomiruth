using CarteleraCine.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CarteleraCine.API.Data
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options) : base(options) { }

        public DbSet<Pelicula> Peliculas => Set<Pelicula>();
        public DbSet<Sala> Salas => Set<Sala>();
        public DbSet<Funcion> Funciones => Set<Funcion>();
        public DbSet<Reserva> Reservas => Set<Reserva>();
    }
}
