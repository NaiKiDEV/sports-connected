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
    public class CourtsController : ControllerBase
    {

        private readonly ICourtsService _courtsService;

        public CourtsController(ICourtsService courtsService)
        {
            _courtsService = courtsService;
        }


        [HttpGet]
        public async Task<ActionResult<ResponseResult<ICollection<Court>>>> GetAllCourts()
        {
            var result = await _courtsService.GetAllCourts();
            return result;
        }

        [HttpGet("{courtId}")]
        public async Task<ActionResult<ResponseResult<Court>>> GetCourt(Guid courtId)
        {
            var result = await _courtsService.GetCourt(courtId);
            return result;
        }

        [HttpGet("owner/id")]
        public async Task<ActionResult<ResponseResult<ICollection<Court>>>> GetOwnerCourts(Guid ownerId)
        {
            var result = await _courtsService.GetCourtsByOwnerId(ownerId);
            return result;
        }


        [HttpPost]
        public async Task<ActionResult<ResponseResult<Court>>> AddNewCourt([FromBody] Court court)
        {
            var result = await _courtsService.AddNewCourt(court);
            return result;
        }

        // DELETE 
        [HttpDelete("{courtId}")]
        public async Task<ActionResult<ResponseResult<Court>>> DeleteCourt(Guid courtId)
        {
            var result = await _courtsService.DeleteCourt(courtId);
            return result;
        }
    }
}