using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SportsConnected.Entities
{
    public class Gym
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Title { get; set; }
        public string Description { get; set; }
        public string FullAdress { get; set; }
        public string ImageUrl { get; set; }
        public virtual ICollection<Offer> Offers { get; set; }
        public Guid OwnerId { get; set; }
        [ForeignKey("OwnerId")]
        public virtual User GymOwner { get; set; }

    }
}
