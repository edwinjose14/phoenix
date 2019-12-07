﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Oracle.EntityFrameworkCore.Metadata;
using PhoenixNet.Models;

namespace PhoenixNet.Migrations.Usuario
{
    [DbContext(typeof(UsuarioContext))]
    [Migration("20191112153709_Autor")]
    partial class Autor
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn)
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            modelBuilder.Entity("PhoenixNet.Models.UsuarioItem", b =>
                {
                    b.Property<string>("Identificacion");

                    b.Property<string>("Apellidos");

                    b.Property<string>("Cargo");

                    b.Property<string>("Direccion");

                    b.Property<int>("Edad");

                    b.Property<string>("Nombres");

                    b.Property<string>("Sexo");

                    b.Property<string>("Telefono");

                    b.HasKey("Identificacion");

                    b.ToTable("UsuarioItems");
                });
#pragma warning restore 612, 618
        }
    }
}