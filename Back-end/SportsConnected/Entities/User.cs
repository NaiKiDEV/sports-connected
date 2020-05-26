using SportsConnected.Entities;
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
        public string PhoneNumber { get; set; } = "861234548";
        public bool IsUser { get; set; }
        public bool IsTrainer { get; set; }
        public bool IsSportGymAdmin { get; set; }
        public bool IsSportGymCourtAdmin { get; set; }
        public virtual ICollection<Membership> Memberships { get; set; }

    }
}
