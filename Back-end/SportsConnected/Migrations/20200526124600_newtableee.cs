using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SportsConnected.Migrations
{
    public partial class newtableee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Membership_Offers_OfferId",
                table: "Membership");

            migrationBuilder.DropForeignKey(
                name: "FK_Membership_Users_UserId",
                table: "Membership");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Membership",
                table: "Membership");

            migrationBuilder.DeleteData(
                table: "Offers",
                keyColumn: "Id",
                keyValue: new Guid("4a49e447-8250-4cae-84c3-b3dabc53d639"));

            migrationBuilder.DeleteData(
                table: "Offers",
                keyColumn: "Id",
                keyValue: new Guid("4d985087-5304-4621-aeaa-42e60cefc97f"));

            migrationBuilder.DeleteData(
                table: "Offers",
                keyColumn: "Id",
                keyValue: new Guid("96bc8d9c-14c7-4947-83ff-d2fb3d58b86d"));

            migrationBuilder.DeleteData(
                table: "Offers",
                keyColumn: "Id",
                keyValue: new Guid("d4cc0eee-31e7-4d37-8999-a355be91b8da"));

            migrationBuilder.DeleteData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: new Guid("7adbb549-8dee-4803-badb-1b7710d80e11"));

            migrationBuilder.DeleteData(
                table: "Gyms",
                keyColumn: "Id",
                keyValue: new Guid("b4bbbdc7-3293-47d9-88e9-3ce6b4af7a25"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("55d6eec4-991b-4436-9a5a-dad0605c1848"));

            migrationBuilder.RenameTable(
                name: "Membership",
                newName: "Memberships");

            migrationBuilder.RenameIndex(
                name: "IX_Membership_UserId",
                table: "Memberships",
                newName: "IX_Memberships_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Membership_OfferId",
                table: "Memberships",
                newName: "IX_Memberships_OfferId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Memberships",
                table: "Memberships",
                column: "Id");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "IsSportGymAdmin", "IsSportGymCourtAdmin", "IsTrainer", "IsUser", "Name", "Password", "PhoneNumber", "Surname" },
                values: new object[] { new Guid("36e53b00-1f14-4fee-a7ba-b05bbe0b73d2"), "jonax@gmail.com", true, true, true, true, "Jonas", "Jonas123", "861234548", "Jonaitis" });

            migrationBuilder.InsertData(
                table: "Courts",
                columns: new[] { "Id", "CourtType", "Description", "FullAdress", "ImageUrl", "OwnerId", "Title" },
                values: new object[] { new Guid("7b9a2827-2c2d-4e50-8fc1-0924ae14633d"), "Basketball", "Krepsinio aikstele su kokybiska danga ir james bluntu", "Kaunas 123g", "www.gogle.lt", new Guid("36e53b00-1f14-4fee-a7ba-b05bbe0b73d2"), "Naujausia krepsinio aikstele" });

            migrationBuilder.InsertData(
                table: "Gyms",
                columns: new[] { "Id", "Description", "FullAdress", "ImageUrl", "OwnerId", "Title" },
                values: new object[] { new Guid("41eb580d-4fce-48e1-bb7e-03d4b83390d3"), "Sportuot arba prasileisi", "Rajono gatve, Ketvirtas kampas", "www.ateiniCia.lt", new Guid("36e53b00-1f14-4fee-a7ba-b05bbe0b73d2"), "Rajonska sportan klub" });

            migrationBuilder.InsertData(
                table: "Offers",
                columns: new[] { "Id", "CourtId", "Description", "GymId", "ImageUrl", "Price", "Title" },
                values: new object[,]
                {
                    { new Guid("982abe0b-4a79-4294-83ea-4a7a03da5549"), new Guid("7b9a2827-2c2d-4e50-8fc1-0924ae14633d"), "courtas pirmassss as dasd asdas ", null, "court.com", 14.0, "Pasiulymaasdas" },
                    { new Guid("98c1722a-6d3a-443e-9594-7609bbf22a20"), new Guid("7b9a2827-2c2d-4e50-8fc1-0924ae14633d"), "Cia courtas du", null, "qewwq.lt", 113.0, "Pasiulymas court antras" },
                    { new Guid("3b093768-b459-484a-974e-d8ee8227eee2"), null, "Toks geras gym, wow, ..as asd alkf alk", new Guid("41eb580d-4fce-48e1-bb7e-03d4b83390d3"), "asda.lt", 12.0, "Pasiulymas" },
                    { new Guid("2868bc8a-f0ad-4df3-8682-d39e3414555a"), null, "asdas dasasdasd asd asdas", new Guid("41eb580d-4fce-48e1-bb7e-03d4b83390d3"), "asaada.lt", 11.0, "Pasiulymas antras" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Memberships_Offers_OfferId",
                table: "Memberships",
                column: "OfferId",
                principalTable: "Offers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Memberships_Users_UserId",
                table: "Memberships",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Memberships_Offers_OfferId",
                table: "Memberships");

            migrationBuilder.DropForeignKey(
                name: "FK_Memberships_Users_UserId",
                table: "Memberships");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Memberships",
                table: "Memberships");

            migrationBuilder.DeleteData(
                table: "Offers",
                keyColumn: "Id",
                keyValue: new Guid("2868bc8a-f0ad-4df3-8682-d39e3414555a"));

            migrationBuilder.DeleteData(
                table: "Offers",
                keyColumn: "Id",
                keyValue: new Guid("3b093768-b459-484a-974e-d8ee8227eee2"));

            migrationBuilder.DeleteData(
                table: "Offers",
                keyColumn: "Id",
                keyValue: new Guid("982abe0b-4a79-4294-83ea-4a7a03da5549"));

            migrationBuilder.DeleteData(
                table: "Offers",
                keyColumn: "Id",
                keyValue: new Guid("98c1722a-6d3a-443e-9594-7609bbf22a20"));

            migrationBuilder.DeleteData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: new Guid("7b9a2827-2c2d-4e50-8fc1-0924ae14633d"));

            migrationBuilder.DeleteData(
                table: "Gyms",
                keyColumn: "Id",
                keyValue: new Guid("41eb580d-4fce-48e1-bb7e-03d4b83390d3"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("36e53b00-1f14-4fee-a7ba-b05bbe0b73d2"));

            migrationBuilder.RenameTable(
                name: "Memberships",
                newName: "Membership");

            migrationBuilder.RenameIndex(
                name: "IX_Memberships_UserId",
                table: "Membership",
                newName: "IX_Membership_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Memberships_OfferId",
                table: "Membership",
                newName: "IX_Membership_OfferId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Membership",
                table: "Membership",
                column: "Id");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "IsSportGymAdmin", "IsSportGymCourtAdmin", "IsTrainer", "IsUser", "Name", "Password", "PhoneNumber", "Surname" },
                values: new object[] { new Guid("55d6eec4-991b-4436-9a5a-dad0605c1848"), "jonax@gmail.com", true, true, true, true, "Jonas", "Jonas123", "861234548", "Jonaitis" });

            migrationBuilder.InsertData(
                table: "Courts",
                columns: new[] { "Id", "CourtType", "Description", "FullAdress", "ImageUrl", "OwnerId", "Title" },
                values: new object[] { new Guid("7adbb549-8dee-4803-badb-1b7710d80e11"), "Basketball", "Krepsinio aikstele su kokybiska danga ir james bluntu", "Kaunas 123g", "www.gogle.lt", new Guid("55d6eec4-991b-4436-9a5a-dad0605c1848"), "Naujausia krepsinio aikstele" });

            migrationBuilder.InsertData(
                table: "Gyms",
                columns: new[] { "Id", "Description", "FullAdress", "ImageUrl", "OwnerId", "Title" },
                values: new object[] { new Guid("b4bbbdc7-3293-47d9-88e9-3ce6b4af7a25"), "Sportuot arba prasileisi", "Rajono gatve, Ketvirtas kampas", "www.ateiniCia.lt", new Guid("55d6eec4-991b-4436-9a5a-dad0605c1848"), "Rajonska sportan klub" });

            migrationBuilder.InsertData(
                table: "Offers",
                columns: new[] { "Id", "CourtId", "Description", "GymId", "ImageUrl", "Price", "Title" },
                values: new object[,]
                {
                    { new Guid("4d985087-5304-4621-aeaa-42e60cefc97f"), new Guid("7adbb549-8dee-4803-badb-1b7710d80e11"), "courtas pirmassss as dasd asdas ", null, "court.com", 14.0, "Pasiulymaasdas" },
                    { new Guid("d4cc0eee-31e7-4d37-8999-a355be91b8da"), new Guid("7adbb549-8dee-4803-badb-1b7710d80e11"), "Cia courtas du", null, "qewwq.lt", 113.0, "Pasiulymas court antras" },
                    { new Guid("4a49e447-8250-4cae-84c3-b3dabc53d639"), null, "Toks geras gym, wow, ..as asd alkf alk", new Guid("b4bbbdc7-3293-47d9-88e9-3ce6b4af7a25"), "asda.lt", 12.0, "Pasiulymas" },
                    { new Guid("96bc8d9c-14c7-4947-83ff-d2fb3d58b86d"), null, "asdas dasasdasd asd asdas", new Guid("b4bbbdc7-3293-47d9-88e9-3ce6b4af7a25"), "asaada.lt", 11.0, "Pasiulymas antras" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Membership_Offers_OfferId",
                table: "Membership",
                column: "OfferId",
                principalTable: "Offers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Membership_Users_UserId",
                table: "Membership",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
