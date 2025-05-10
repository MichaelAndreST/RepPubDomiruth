namespace CarteleraCine.API.Models
{
    public class Pelicula
    {
        public int Id { get; set; }
        public string Titulo { get; set; } = string.Empty;
        public string Genero { get; set; } = string.Empty;
        public string Sinopsis { get; set; } = string.Empty;
        public int Duracion { get; set; }
        public string? ImagenUrl { get; set; }
        public ICollection<Funcion> Funciones { get; set; } = new List<Funcion>();
    }
}
