using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CodePulse.API.Migrations.AuthDb
{
    /// <inheritdoc />
    public partial class AuthDBMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "edc267ec-d43c-4e3b-8108-a1a1f819906d",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "c5841296-987f-43d1-8694-197d530347fe", "AQAAAAIAAYagAAAAEIEwBkH4E+pn5DuuIM75Nr2/YtpyYtyOsupyVMMLkf9rKwCzqgDLh+XgztRG9aqchw==", "21e23c6f-e48c-4c99-875f-d4a97a9f29a7" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "edc267ec-d43c-4e3b-8108-a1a1f819906d",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "36133d24-05e9-47a7-92e7-26a3a04657c0", "AQAAAAIAAYagAAAAEFFugz4+/jgC5expBuZd0vaXRKHu8AQ7CVNbM+H1sHeylsaLv2GJzpByC5lk785NFQ==", "17a80c1d-54b0-4a38-836d-07d816449916" });
        }
    }
}
