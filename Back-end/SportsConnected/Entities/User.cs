using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsConnected
{
    public class User
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool IsUser { get; set; }
        public bool IsTrainer { get; set; }
        public bool IsSportGymAdmin { get; set; }
        public bool IsSportGymCourtAdmin { get; set; }
    }
}
