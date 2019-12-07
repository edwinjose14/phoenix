﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Oracle.EntityFrameworkCore.Metadata;
using PhoenixNet.Models;

namespace PhoenixNet.Migrations.Copias
{
    [DbContext(typeof(CopiasContext))]
    partial class CopiasContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn)
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            modelBuilder.Entity("PhoenixNet.Models.CopiasItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CodLibros");

                    b.Property<int>("CopiasDisponibles");

                    b.HasKey("Id");

                    b.ToTable("CopiasItems");
                });
#pragma warning restore 612, 618
        }
    }
}
