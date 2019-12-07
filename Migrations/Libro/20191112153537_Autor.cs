using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Oracle.EntityFrameworkCore.Metadata;

namespace PhoenixNet.Migrations.Libro
{
    public partial class Autor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LibroItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    Titulo = table.Column<string>(nullable: true),
                    CodAutor = table.Column<int>(nullable: false),
                    Categoria = table.Column<string>(nullable: true),
                    NPaginas = table.Column<int>(nullable: false),
                    CodEditorial = table.Column<int>(nullable: false),
                    FechaPublicacion = table.Column<DateTime>(nullable: false),
                    Idioma = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LibroItems", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LibroItems");
        }
    }
}
