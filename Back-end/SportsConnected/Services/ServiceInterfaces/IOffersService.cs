using SportsConnected.DTO;
using SportsConnected.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsConnected.Services.ServiceInterfaces
{
    public interface IOffersService
    {
        Task<ResponseResult<Offer>> AddNewOffer(Offer newOffer);
        Task<ResponseResult<ICollection<Offer>>> GetAllOffers();
        Task<ResponseResult<ICollection<Offer>>> GetAllGymsOffers();
        Task<ResponseResult<ICollection<Offer>>> GetAllCourtsOffers();
        Task<ResponseResult<Offer>> GetOffer(Guid offerId);
        Task<ResponseResult<Offer>> DeleteOffer(Guid offerId);
        Task<ResponseResult<Offer>> UpdateOffer(Offer offer);
    }
}
