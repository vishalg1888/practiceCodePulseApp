using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CodePulse.API.Migrations.AuthDb
{
    /// <inheritdoc />
    public partial class AuthDb1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "edc267ec-d43c-4e3b-8108-a1a1f819906d",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "b3f3ff0e-b4f6-4b69-8223-235f6d7cb9a4", "AQAAAAIAAYagAAAAEB4ksbJkdCyTzyxlWnp9LTrT0hAlvV10SnpLGMwshOfgCWcJuiFmP1bZOGuPk+yURg==", "087cbfb1-c062-4739-84ec-5324086dd531" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "edc267ec-d43c-4e3b-8108-a1a1f819906d",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "c5841296-987f-43d1-8694-197d530347fe", "AQAAAAIAAYagAAAAEIEwBkH4E+pn5DuuIM75Nr2/YtpyYtyOsupyVMMLkf9rKwCzqgDLh+XgztRG9aqchw==", "21e23c6f-e48c-4c99-875f-d4a97a9f29a7" });
        }
    }
}
