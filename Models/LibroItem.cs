using System;

namespace PhoenixNet.Models
{
    public class LibroItem
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public int CodAutor { get; set; }
        public string Categoria { get; set; }
        public int NPaginas { get; set; }
        public int CodEditorial { get; set; }
        public DateTime  FechaPublicacion { get; set; }
        public string Idioma { get; set; }
    }
}