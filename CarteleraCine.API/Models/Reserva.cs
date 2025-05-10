namespace CarteleraCine.API.Models
{
    public class Reserva
    {
        public int Id { get; set; }
        public int FuncionId { get; set; }
        public Funcion? Funcion { get; set; }

        public string Nombres { get; set; } = string.Empty;
        public string Apellidos { get; set; } = string.Empty;
        public DateTime FechaNacimiento { get; set; }
        public string Genero { get; set; } = string.Empty;
        public string TipoDocumento { get; set; } = string.Empty;
        public string NumeroDocumento { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string NumeroTicket { get; set; } = Guid.NewGuid().ToString();
    }
}
