﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Oracle.EntityFrameworkCore.Metadata;
using PhoenixNet.Models;

namespace PhoenixNet.Migrations.Prestamo
{
    [DbContext(typeof(PrestamoContext))]
    [Migration("20191112153642_Autor")]
    partial class Autor
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn)
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            modelBuilder.Entity("PhoenixNet.Models.PrestamoItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CodLibro");

                    b.Property<string>("Estado");

                    b.Property<DateTime>("FechaSalida");

                    b.Property<string>("IdUsuario");

                    b.HasKey("Id");

                    b.ToTable("PrestamoItems");
                });
#pragma warning restore 612, 618
        }
    }
}
