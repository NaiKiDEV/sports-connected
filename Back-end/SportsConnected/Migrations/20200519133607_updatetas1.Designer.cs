﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SportsConnected.Context;

namespace SportsConnected.Migrations
{
    [DbContext(typeof(SportsConnectedContext))]
    [Migration("20200519133607_updatetas1")]
    partial class updatetas1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("SportsConnected.Entities.Court", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CourtType");

                    b.Property<string>("Description");

                    b.Property<string>("FullAdress");

                    b.Property<string>("ImageUrl");

                    b.Property<Guid>("OwnerId");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.HasIndex("OwnerId");

                    b.ToTable("Courts");

                    b.HasData(
                        new { Id = new Guid("d3ee2b66-f167-4f05-8ae6-f9dca6165f76"), CourtType = "Basketball", Description = "Krepsinio aikstele su kokybiska danga ir james bluntu", FullAdress = "Kaunas 123g", ImageUrl = "www.gogle.lt", OwnerId = new Guid("c440fd9f-666e-4651-bd25-5a4f4cf41f37"), Title = "Naujausia krepsinio aikstele" }
                    );
                });

            modelBuilder.Entity("SportsConnected.Entities.Gym", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("FullAdress");

                    b.Property<string>("ImageUrl");

                    b.Property<Guid>("OwnerId");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.HasIndex("OwnerId");

                    b.ToTable("Gyms");

                    b.HasData(
                        new { Id = new Guid("c4998488-23ef-46c0-b05d-2d2ed355dac6"), Description = "Sportuot arba prasileisi", FullAdress = "Rajono gatve, Ketvirtas kampas", ImageUrl = "www.ateiniCia.lt", OwnerId = new Guid("c440fd9f-666e-4651-bd25-5a4f4cf41f37"), Title = "Rajonska sportan klub" }
                    );
                });

            modelBuilder.Entity("SportsConnected.Entities.Offer", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("CourtId");

                    b.Property<string>("Description");

                    b.Property<Guid?>("GymId");

                    b.Property<string>("ImageUrl");

                    b.Property<double>("Price");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.HasIndex("CourtId");

                    b.HasIndex("GymId");

                    b.ToTable("Offers");

                    b.HasData(
                        new { Id = new Guid("dd14964b-a760-4c85-b752-369697c3aa62"), Description = "Toks geras gym, wow, ..as asd alkf alk", GymId = new Guid("c4998488-23ef-46c0-b05d-2d2ed355dac6"), ImageUrl = "asda.lt", Price = 12.0, Title = "Pasiulymas" },
                        new { Id = new Guid("5b76028b-2586-4670-b9cf-043909a6cc28"), Description = "asdas dasasdasd asd asdas", GymId = new Guid("c4998488-23ef-46c0-b05d-2d2ed355dac6"), ImageUrl = "asaada.lt", Price = 11.0, Title = "Pasiulymas antras" },
                        new { Id = new Guid("44761836-b94d-47f6-b058-0fbd408a4428"), CourtId = new Guid("d3ee2b66-f167-4f05-8ae6-f9dca6165f76"), Description = "courtas pirmassss as dasd asdas ", ImageUrl = "court.com", Price = 14.0, Title = "Pasiulymaasdas" },
                        new { Id = new Guid("3705e9d6-74c7-4684-8caf-e46211ffb590"), CourtId = new Guid("d3ee2b66-f167-4f05-8ae6-f9dca6165f76"), Description = "Cia courtas du", ImageUrl = "qewwq.lt", Price = 113.0, Title = "Pasiulymas court antras" }
                    );
                });

            modelBuilder.Entity("SportsConnected.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email");

                    b.Property<bool>("IsSportGymAdmin");

                    b.Property<bool>("IsSportGymCourtAdmin");

                    b.Property<bool>("IsTrainer");

                    b.Property<bool>("IsUser");

                    b.Property<string>("Name");

                    b.Property<string>("Password");

                    b.Property<string>("Surname");

                    b.HasKey("Id");

                    b.ToTable("Users");

                    b.HasData(
                        new { Id = new Guid("c440fd9f-666e-4651-bd25-5a4f4cf41f37"), Email = "jonax@gmail.com", IsSportGymAdmin = true, IsSportGymCourtAdmin = true, IsTrainer = true, IsUser = true, Name = "Jonas", Password = "Jonas123", Surname = "Jonaitis" }
                    );
                });

            modelBuilder.Entity("SportsConnected.Entities.Court", b =>
                {
                    b.HasOne("SportsConnected.User", "CourtOwner")
                        .WithMany()
                        .HasForeignKey("OwnerId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SportsConnected.Entities.Gym", b =>
                {
                    b.HasOne("SportsConnected.User", "GymOwner")
                        .WithMany()
                        .HasForeignKey("OwnerId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SportsConnected.Entities.Offer", b =>
                {
                    b.HasOne("SportsConnected.Entities.Court", "Court")
                        .WithMany("Offers")
                        .HasForeignKey("CourtId");

                    b.HasOne("SportsConnected.Entities.Gym", "Gym")
                        .WithMany("Offers")
                        .HasForeignKey("GymId");
                });
#pragma warning restore 612, 618
        }
    }
}