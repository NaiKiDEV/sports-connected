using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportsConnected.DTO;
using SportsConnected.Entities;
using SportsConnected.Services.ServiceInterfaces;

namespace SportsConnected.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OffersController : ControllerBase
    {
        private readonly IOffersService _offersService;

        public OffersController(IOffersService offersService)
        {
            _offersService = offersService;
        }


        [HttpGet]
        public async Task<ActionResult<ResponseResult<ICollection<Offer>>>> GetAllOffers() {
            var offers = await _offersService.GetAllOffers();
            return offers;
        }

        [HttpGet("{offerId}")]
        public async Task<ActionResult<ResponseResult<ICollection<Offer>>>> GetOffer(Guid offerId)
        {
            var offers = await _offersService.GetAllGymsOffers();
            return offers;
        }

        [HttpGet("courts")]
        public async Task<ActionResult<ResponseResult<ICollection<Offer>>>> GetAllCourtsOffers()
        {
            var offers = await _offersService.GetAllCourtsOffers();
            return offers;
        }

        [HttpGet("gyms")]
        public async Task<ActionResult<ResponseResult<ICollection<Offer>>>> GetGymsOffers()
        {
            var offers = await _offersService.GetAllGymsOffers();
            return offers;
        }


        [HttpPost]
        public async Task<ActionResult<ResponseResult<Offer>>> AddNewOffer([FromBody]Offer offer)
        {
            var result = await _offersService.AddNewOffer(offer);
            return result;
        }

        [HttpDelete("{offerId}")]
        public async Task<ActionResult<ResponseResult<Offer>>> DeleteOffer(Guid offerId)
        {
            var result = await _offersService.DeleteOffer(offerId);
            return result;
        }
    }
}