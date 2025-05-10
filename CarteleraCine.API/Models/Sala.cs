namespace CarteleraCine.API.Models
{
    public class Sala
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;
        public int Capacidad { get; set; }
        public ICollection<Funcion> Funciones { get; set; } = new List<Funcion>();

    }
}
