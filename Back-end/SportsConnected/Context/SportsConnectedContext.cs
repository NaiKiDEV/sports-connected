using Microsoft.EntityFrameworkCore;
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
        // Add here other entities dbsets
    }
}
