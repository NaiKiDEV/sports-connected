using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SportsConnected.Entities
{
    public class Membership
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public Guid OfferId { get; set; }
        [ForeignKey("OfferId")]
        public virtual Offer Offer { get; set; }
        public Guid UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual User User { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool IsPaid { get; set; }
    }
}
