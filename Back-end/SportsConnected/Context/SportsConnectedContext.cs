using Microsoft.EntityFrameworkCore;
using SportsConnected.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsConnected.Context
{
    public class SportsConnectedContext : DbContext
    {
        public SportsConnectedContext(DbContextOptions<SportsConnectedContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Gym> Gyms { get; set; }
        public DbSet<Court> Courts { get; set; }
        public DbSet<Offer> Offers { get; set; }
        public DbSet<Membership> Memberships { get; set; }
        // Add here other entities dbsets

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            var userId = Guid.NewGuid();
            modelBuilder.Entity<User>().HasData(
                new User { Email = "jonax@gmail.com", Id = userId, IsSportGymAdmin = true, IsSportGymCourtAdmin = true, IsTrainer = true, IsUser = true, Name = "Jonas", Password = "Jonas123", Surname = "Jonaitis" }
                );

            var courtId = Guid.NewGuid();
            modelBuilder.Entity<Court>().HasData(
                new Court { CourtType = "Basketball", Id = courtId, Description = "Krepsinio aikstele su kokybiska danga ir james bluntu", FullAdress = "Kaunas 123g", ImageUrl = "www.gogle.lt", Title = "Naujausia krepsinio aikstele", OwnerId = userId }
                );

            var gymId = Guid.NewGuid();
            modelBuilder.Entity<Gym>().HasData(
                new Gym { OwnerId = userId, Title = "Rajonska sportan klub", ImageUrl = "www.ateiniCia.lt", Description = "Sportuot arba prasileisi", FullAdress = "Rajono gatve, Ketvirtas kampas", Id = gymId }
            );

            modelBuilder.Entity<Offer>().HasData(
                new Offer { Id = Guid.NewGuid(), Description = "Toks geras gym, wow, ..as asd alkf alk", ImageUrl = "asda.lt", Title = "Pasiulymas", Price = 12, GymId = gymId },
                new Offer { Id = Guid.NewGuid(), Description = "asdas dasasdasd asd asdas", ImageUrl = "asaada.lt", Title = "Pasiulymas antras", Price = 11, GymId = gymId },
                new Offer { Id = Guid.NewGuid(), Description = "courtas pirmassss as dasd asdas ", ImageUrl = "court.com", Title = "Pasiulymaasdas", Price = 14, CourtId = courtId },
                new Offer { Id = Guid.NewGuid(), Description = "Cia courtas du", ImageUrl = "qewwq.lt", Title = "Pasiulymas court antras", Price = 113, CourtId = courtId }
                ); ;


        
        }


    }
}
