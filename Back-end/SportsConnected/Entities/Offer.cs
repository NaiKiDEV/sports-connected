using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SportsConnected.Entities
{
    public class Offer
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Title { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public string ImageUrl { get; set; }
        public Guid? CourtId { get; set; }
        [ForeignKey("CourtId")]
        public virtual Court Court { get; set; }
        public Guid? GymId { get; set; }
        [ForeignKey("GymId")]
        public virtual Gym Gym { get; set; }

    }
}
