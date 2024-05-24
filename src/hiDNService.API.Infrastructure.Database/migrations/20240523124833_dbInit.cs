using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace hiDNService.API.Infrastructure.Database.migrations
{
    /// <inheritdoc />
    public partial class dbInit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "T_ZoneTemplate",
                columns: table => new
                {
                    ItemId = table.Column<string>(type: "varchar", fixedLength: true, maxLength: 36, nullable: false),
                    Name = table.Column<string>(type: "varchar", maxLength: 50, nullable: false),
                    Description = table.Column<string>(type: "TEXT", maxLength: 255, nullable: true),
                    IsActive = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_T_ZoneTemplate", x => x.ItemId);
                });

            migrationBuilder.CreateTable(
                name: "T_ZoneTemplateRecord",
                columns: table => new
                {
                    ItemId = table.Column<string>(type: "varchar", fixedLength: true, maxLength: 36, nullable: false),
                    Name = table.Column<string>(type: "varchar", maxLength: 50, nullable: false),
                    Type = table.Column<string>(type: "varchar", maxLength: 20, nullable: false),
                    TTL = table.Column<int>(type: "INTEGER", nullable: true),
                    Data = table.Column<string>(type: "TEXT", maxLength: 255, nullable: true),
                    Description = table.Column<string>(type: "TEXT", maxLength: 255, nullable: true),
                    IsActive = table.Column<bool>(type: "INTEGER", nullable: false),
                    ZoneTemplateId = table.Column<string>(type: "varchar", fixedLength: true, maxLength: 36, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_T_ZoneTemplateRecord", x => x.ItemId);
                    table.ForeignKey(
                        name: "FK_T_ZoneTemplateRecord_T_ZoneTemplate_ZoneTemplateId",
                        column: x => x.ZoneTemplateId,
                        principalTable: "T_ZoneTemplate",
                        principalColumn: "ItemId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_T_ZoneTemplate_Name",
                table: "T_ZoneTemplate",
                column: "Name");

            migrationBuilder.CreateIndex(
                name: "IX_T_ZoneTemplateRecord_Name",
                table: "T_ZoneTemplateRecord",
                column: "Name");

            migrationBuilder.CreateIndex(
                name: "IX_T_ZoneTemplateRecord_ZoneTemplateId",
                table: "T_ZoneTemplateRecord",
                column: "ZoneTemplateId");

            migrationBuilder.CreateIndex(
                name: "IX_T_ZoneTemplateRecord_ZoneTemplateId_IsActive",
                table: "T_ZoneTemplateRecord",
                columns: new[] { "ZoneTemplateId", "IsActive" });

            migrationBuilder.CreateIndex(
                name: "IX_T_ZoneTemplateRecord_ZoneTemplateId_Type_IsActive",
                table: "T_ZoneTemplateRecord",
                columns: new[] { "ZoneTemplateId", "Type", "IsActive" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "T_ZoneTemplateRecord");

            migrationBuilder.DropTable(
                name: "T_ZoneTemplate");
        }
    }
}
