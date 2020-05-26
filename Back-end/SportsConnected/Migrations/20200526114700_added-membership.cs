using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SportsConnected.Migrations
{
    public partial class addedmembership : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Offers",
                keyColumn: "Id",
                keyValue: new Guid("20775a9c-7d71-45ca-9e2f-7c41224bb6b6"));

            migrationBuilder.DeleteData(
                table: "Offers",
                keyColumn: "Id",
                keyValue: new Guid("250d5a43-1536-4f0a-b953-bc96036dbc07"));

            migrationBuilder.DeleteData(
                table: "Offers",
                keyColumn: "Id",
                keyValue: new Guid("3988e52f-51db-424a-bbfc-069b6fb99961"));

            migrationBuilder.DeleteData(
                table: "Offers",
                keyColumn: "Id",
                keyValue: new Guid("d78e09e6-b3db-4f9c-af23-6e6dadace7e1"));

            migrationBuilder.DeleteData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: new Guid("ae7294a6-c11e-4621-a481-9797b63095f3"));

            migrationBuilder.DeleteData(
                table: "Gyms",
                keyColumn: "Id",
                keyValue: new Guid("34ad3b00-07e3-47f9-aac2-0550ee4941b3"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("0063ff14-101c-4570-ae83-a6c639ba9a9a"));

            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber",
                table: "Users",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Membership",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    OfferId = table.Column<Guid>(nullable: false),
                    UserId = table.Column<Guid>(nullable: false),
                    StartDate = table.Column<DateTime>(nullable: false),
                    EndDate = table.Column<DateTime>(nullable: false),
                    IsPaid = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Membership", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Membership_Offers_OfferId",
                        column: x => x.OfferId,
                        principalTable: "Offers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Membership_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

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

            migrationBuilder.CreateIndex(
                name: "IX_Membership_OfferId",
                table: "Membership",
                column: "OfferId");

            migrationBuilder.CreateIndex(
                name: "IX_Membership_UserId",
                table: "Membership",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Membership");

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

            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "Users");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "IsSportGymAdmin", "IsSportGymCourtAdmin", "IsTrainer", "IsUser", "Name", "Password", "Surname" },
                values: new object[] { new Guid("0063ff14-101c-4570-ae83-a6c639ba9a9a"), "jonax@gmail.com", true, true, true, true, "Jonas", "Jonas123", "Jonaitis" });

            migrationBuilder.InsertData(
                table: "Courts",
                columns: new[] { "Id", "CourtType", "Description", "FullAdress", "ImageUrl", "OwnerId", "Title" },
                values: new object[] { new Guid("ae7294a6-c11e-4621-a481-9797b63095f3"), "Basketball", "Krepsinio aikstele su kokybiska danga ir james bluntu", "Kaunas 123g", "www.gogle.lt", new Guid("0063ff14-101c-4570-ae83-a6c639ba9a9a"), "Naujausia krepsinio aikstele" });

            migrationBuilder.InsertData(
                table: "Gyms",
                columns: new[] { "Id", "Description", "FullAdress", "ImageUrl", "OwnerId", "Title" },
                values: new object[] { new Guid("34ad3b00-07e3-47f9-aac2-0550ee4941b3"), "Sportuot arba prasileisi", "Rajono gatve, Ketvirtas kampas", "www.ateiniCia.lt", new Guid("0063ff14-101c-4570-ae83-a6c639ba9a9a"), "Rajonska sportan klub" });

            migrationBuilder.InsertData(
                table: "Offers",
                columns: new[] { "Id", "CourtId", "Description", "GymId", "ImageUrl", "Price", "Title" },
                values: new object[,]
                {
                    { new Guid("20775a9c-7d71-45ca-9e2f-7c41224bb6b6"), new Guid("ae7294a6-c11e-4621-a481-9797b63095f3"), "courtas pirmassss as dasd asdas ", null, "court.com", 14.0, "Pasiulymaasdas" },
                    { new Guid("3988e52f-51db-424a-bbfc-069b6fb99961"), new Guid("ae7294a6-c11e-4621-a481-9797b63095f3"), "Cia courtas du", null, "qewwq.lt", 113.0, "Pasiulymas court antras" },
                    { new Guid("d78e09e6-b3db-4f9c-af23-6e6dadace7e1"), null, "Toks geras gym, wow, ..as asd alkf alk", new Guid("34ad3b00-07e3-47f9-aac2-0550ee4941b3"), "asda.lt", 12.0, "Pasiulymas" },
                    { new Guid("250d5a43-1536-4f0a-b953-bc96036dbc07"), null, "asdas dasasdasd asd asdas", new Guid("34ad3b00-07e3-47f9-aac2-0550ee4941b3"), "asaada.lt", 11.0, "Pasiulymas antras" }
                });
        }
    }
}
