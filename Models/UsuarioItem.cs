using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;
namespace PhoenixNet.Models
{
    public class UsuarioItem
    {
        [Key][DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string Identificacion { get; set; }
        public string Apellidos { get; set; }
        public string Nombres { get; set; }
        public int Edad { get; set; }
        public string Sexo { get; set; }
        public string Direccion { get; set; }
        public string Cargo { get; set; }
        public string Telefono { get; set; }
    }
}