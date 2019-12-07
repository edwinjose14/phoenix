using System;

namespace PhoenixNet.Models
{
    public class PrestamoItem
    {
        public int Id { get; set; }
        public string IdUsuario { get; set; }
        public int CodLibro { get; set; }
        public DateTime FechaSalida { get; set; }
        public string Estado { get; set; }
    }
}