using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SportsConnected.Migrations
{
    public partial class updatetas1 : Migration
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

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "IsSportGymAdmin", "IsSportGymCourtAdmin", "IsTrainer", "IsUser", "Name", "Password", "Surname" },
                values: new object[] { new Guid("c440fd9f-666e-4651-bd25-5a4f4cf41f37"), "jonax@gmail.com", true, true, true, true, "Jonas", "Jonas123", "Jonaitis" });

            migrationBuilder.InsertData(
                table: "Courts",
                columns: new[] { "Id", "CourtType", "Description", "FullAdress", "ImageUrl", "OwnerId", "Title" },
                values: new object[] { new Guid("d3ee2b66-f167-4f05-8ae6-f9dca6165f76"), "Basketball", "Krepsinio aikstele su kokybiska danga ir james bluntu", "Kaunas 123g", "www.gogle.lt", new Guid("c440fd9f-666e-4651-bd25-5a4f4cf41f37"), "Naujausia krepsinio aikstele" });

            migrationBuilder.InsertData(
                table: "Gyms",
                columns: new[] { "Id", "Description", "FullAdress", "ImageUrl", "OwnerId", "Title" },
                values: new object[] { new Guid("c4998488-23ef-46c0-b05d-2d2ed355dac6"), "Sportuot arba prasileisi", "Rajono gatve, Ketvirtas kampas", "www.ateiniCia.lt", new Guid("c440fd9f-666e-4651-bd25-5a4f4cf41f37"), "Rajonska sportan klub" });

            migrationBuilder.InsertData(
                table: "Offers",
                columns: new[] { "Id", "CourtId", "Description", "GymId", "ImageUrl", "Price", "Title" },
                values: new object[,]
                {
                    { new Guid("44761836-b94d-47f6-b058-0fbd408a4428"), new Guid("d3ee2b66-f167-4f05-8ae6-f9dca6165f76"), "courtas pirmassss as dasd asdas ", null, "court.com", 14.0, "Pasiulymaasdas" },
                    { new Guid("3705e9d6-74c7-4684-8caf-e46211ffb590"), new Guid("d3ee2b66-f167-4f05-8ae6-f9dca6165f76"), "Cia courtas du", null, "qewwq.lt", 113.0, "Pasiulymas court antras" },
                    { new Guid("dd14964b-a760-4c85-b752-369697c3aa62"), null, "Toks geras gym, wow, ..as asd alkf alk", new Guid("c4998488-23ef-46c0-b05d-2d2ed355dac6"), "asda.lt", 12.0, "Pasiulymas" },
                    { new Guid("5b76028b-2586-4670-b9cf-043909a6cc28"), null, "asdas dasasdasd asd asdas", new Guid("c4998488-23ef-46c0-b05d-2d2ed355dac6"), "asaada.lt", 11.0, "Pasiulymas antras" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Offers",
                keyColumn: "Id",
                keyValue: new Guid("3705e9d6-74c7-4684-8caf-e46211ffb590"));

            migrationBuilder.DeleteData(
                table: "Offers",
                keyColumn: "Id",
                keyValue: new Guid("44761836-b94d-47f6-b058-0fbd408a4428"));

            migrationBuilder.DeleteData(
                table: "Offers",
                keyColumn: "Id",
                keyValue: new Guid("5b76028b-2586-4670-b9cf-043909a6cc28"));

            migrationBuilder.DeleteData(
                table: "Offers",
                keyColumn: "Id",
                keyValue: new Guid("dd14964b-a760-4c85-b752-369697c3aa62"));

            migrationBuilder.DeleteData(
                table: "Courts",
                keyColumn: "Id",
                keyValue: new Guid("d3ee2b66-f167-4f05-8ae6-f9dca6165f76"));

            migrationBuilder.DeleteData(
                table: "Gyms",
                keyColumn: "Id",
                keyValue: new Guid("c4998488-23ef-46c0-b05d-2d2ed355dac6"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("c440fd9f-666e-4651-bd25-5a4f4cf41f37"));

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
