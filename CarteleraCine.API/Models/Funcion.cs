namespace CarteleraCine.API.Models
{
    public class Funcion
    {
        public int Id { get; set; }

        // Relación con Pelicula
        public int PeliculaId { get; set; }
        public Pelicula? Pelicula { get; set; }

        // Relación con Sala
        public int SalaId { get; set; }
        public Sala? Sala { get; set; }

        // Hora de inicio de la función
        public DateTime HoraInicio { get; set; }

        // Relación con Reserva (una función puede tener muchas reservas)
        public ICollection<Reserva> Reservas { get; set; } = new List<Reserva>();
    }
}
