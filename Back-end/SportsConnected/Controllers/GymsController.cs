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
    public class GymsController : ControllerBase
    {
        private readonly IGymsService _gymsService;

        public GymsController(IGymsService gymsService)
        {
            _gymsService = gymsService;
        }


        [HttpGet]
        public async Task<ActionResult<ResponseResult<ICollection<Gym>>>> GetAllGyms()
        {
            var result = await _gymsService.GetAllGyms();
            return result;
        }

        [HttpGet("{gymId}")]
        public async Task<ActionResult<ResponseResult<Gym>>> GetGym(Guid gymId)
        {
            var result = await _gymsService.GetGym(gymId);
            return result;
        }

        [HttpGet("owner/id")]
        public async Task<ActionResult<ResponseResult<ICollection<Gym>>>> GetOwnerGyms(Guid ownerId)
        {
            var result = await _gymsService.GetGymsByOwnerId(ownerId);
            return result;
        }


        [HttpPost]
        public async Task<ActionResult<ResponseResult<Gym>>> AddNewCourt([FromBody] Gym gym)
        {
            var result = await _gymsService.AddNewGym(gym);
            return result;
        }

    }
}