using Microsoft.EntityFrameworkCore;
using SportsConnected.Context;
using SportsConnected.DTO;
using SportsConnected.Entities;
using SportsConnected.Services.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsConnected.Services
{
    public class OffersService : IOffersService
    {
        private readonly SportsConnectedContext _context;
        public OffersService(SportsConnectedContext context) {
            _context = context;
        }

        public async Task<ResponseResult<Offer>> UpdateOffer(Offer offer)
        {
            try
            {
                _context.Offers.Update(offer);
                await _context.SaveChangesAsync();
                return new ResponseResult<Offer> { Error = false, Message = "court updated successfully", ReturnResult = offer };
            }
            catch (Exception ex)
            {
                return new ResponseResult<Offer> { Error = true, Message = ex.Message, ReturnResult = offer };
            }
        }

        public async Task<ResponseResult<Offer>> AddNewOffer(Offer newOffer)
        {
            bool flag = false;
            string message = "Added successfully";
            try
            {
                _context.Offers.Add(newOffer);
                message = "Court added successfully";
                await _context.SaveChangesAsync();
            }
            catch (Exception ex) {
                flag = true;
                message = ex.Message;
            }
            return new ResponseResult<Offer> { Error = flag, Message = message, ReturnResult = newOffer }; 
        }

        public async Task<ResponseResult<ICollection<Offer>>> GetAllCourtsOffers()
        {
            var offers = _context.Offers.Include(a => a.Court).Include(a => a.Gym).Where(x => x.CourtId != null).ToList();
            return new ResponseResult<ICollection<Offer>> { Error = false, Message = "Returned successfuly", ReturnResult = offers };
        }

        public async Task<ResponseResult<ICollection<Offer>>> GetAllGymsOffers()
        {
            var offers = _context.Offers.Include(a => a.Court).Include(a => a.Gym).Where(x => x.GymId != null).ToList();
            return new ResponseResult<ICollection<Offer>> { Error = false, Message = "Returned successfuly", ReturnResult = offers };
        }

        public async Task<ResponseResult<ICollection<Offer>>> GetAllOffers()
        {
            var offers = _context.Offers.Include(a=>a.Court).Include(a=> a.Gym).ToList();
            return new ResponseResult<ICollection<Offer>> { Error = false, Message = "Returned successfuly", ReturnResult = offers };
        }

        public async Task<ResponseResult<Offer>> GetOffer(Guid offerId)
        {
            var offer = _context.Offers.Include(a=>a.Gym).Include(a=>a.Court).FirstOrDefault(x => x.Id == offerId);
            return new ResponseResult<Offer> { Error = false, Message = "Return successfuly", ReturnResult = offer };
        }

        public async Task<ResponseResult<Offer>> DeleteOffer(Guid offerId)
        {
            var offer = GetOffer(offerId).Result.ReturnResult;
            bool flag = false;
            string message = "";
            try {
                _context.Offers.Remove(offer);
                message = "Offer deleted successfully";
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                flag = true;
                message = ex.Message;
                return new ResponseResult<Offer> { Error = flag, Message = message, ReturnResult = offer };
            }
            return new ResponseResult<Offer> { Error = flag, Message = message, ReturnResult = null };
        }

    }
}
