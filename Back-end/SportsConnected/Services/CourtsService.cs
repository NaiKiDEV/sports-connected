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
    public class CourtsService : ICourtsService
    {
        private readonly SportsConnectedContext _context;
        public CourtsService(SportsConnectedContext context)
        {
            _context = context;
        }
        public async Task<ResponseResult<Court>> AddNewCourt(Court newCourt)
        {
            bool flag = false;
            string message = "";
            try
            {
                _context.Courts.Add(newCourt);
                message = "Court added successfully";
                await _context.SaveChangesAsync();
            }
            catch (Exception ex) {
                flag = true;
                message = ex.Message;
            }
            return new ResponseResult<Court> { Error = flag, Message = message, ReturnResult = newCourt };
        }

        public async Task<ResponseResult<ICollection<Court>>> GetAllCourts()
        {
            var courts = _context.Courts.Include(x => x.Offers).ToList();
            return new ResponseResult<ICollection<Court>> { Error = false, Message = "Returned successfully", ReturnResult = courts };
        }

        public async Task<ResponseResult<Court>> GetCourt(Guid courtId)
        {
            var court = _context.Courts.Include(x => x.Offers).FirstOrDefault(x => x.Id == courtId);
            return new ResponseResult<Court> { Error = false, Message = "Returned successfully", ReturnResult = court };
        }

        public async Task<ResponseResult<ICollection<Court>>> GetCourtsByOwnerId(Guid ownerId)
        {
            var courts = _context.Courts.Include(x=>x.Offers).Where(x => x.OwnerId == ownerId).ToList();
            return new ResponseResult<ICollection<Court>> { Error = false, Message = "Returned successfully", ReturnResult = courts };
        }
    }
}
