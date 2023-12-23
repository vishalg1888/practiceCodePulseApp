using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CodePulse.API.Migrations.AuthDb
{
    /// <inheritdoc />
    public partial class AuthDb2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "edc267ec-d43c-4e3b-8108-a1a1f819906d",
                columns: new[] { "ConcurrencyStamp", "Email", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "SecurityStamp", "UserName" },
                values: new object[] { "56d04ba6-8b3b-484b-95fb-218079cee7ee", "admin@gmail.com", "ADMIN@GMAIL.COM", "ADMIN@GMAIL.COM", "AQAAAAIAAYagAAAAEMmH/noE///DCSNnouIT7/r7FLJhJuwPQdA49zp/v3uZIbnaouNMNdy5OHGS0PZRGQ==", "cd4ba18e-eb07-4b40-8f5f-76a7d9b98d61", "admin@gmail.com" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "edc267ec-d43c-4e3b-8108-a1a1f819906d",
                columns: new[] { "ConcurrencyStamp", "Email", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "SecurityStamp", "UserName" },
                values: new object[] { "b3f3ff0e-b4f6-4b69-8223-235f6d7cb9a4", "admin@codepulse.com", "ADMIN@CODEPULSE.COM", "ADMIN@CODEPULSE.COM", "AQAAAAIAAYagAAAAEB4ksbJkdCyTzyxlWnp9LTrT0hAlvV10SnpLGMwshOfgCWcJuiFmP1bZOGuPk+yURg==", "087cbfb1-c062-4739-84ec-5324086dd531", "admin@codepulse.com" });
        }
    }
}
