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
    public class GymsService : IGymsService
    {
        private readonly SportsConnectedContext _context;
        public GymsService(SportsConnectedContext context)
        {
            _context = context;
        }

        public async Task<ResponseResult<Gym>> AddNewGym(Gym newGym)
        {
            bool flag = false;
            string message = "";
            try
            {
                _context.Gyms.Add(newGym);
                message = "Court added successfully";
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                flag = true;
                message = ex.Message;
            }
            return new ResponseResult<Gym> { Error = flag, Message = message, ReturnResult = newGym };
        }

        public async Task<ResponseResult<ICollection<Gym>>> GetAllGyms()
        {
            var result = _context.Gyms.Include(x => x.Offers).ToList();
            return new ResponseResult<ICollection<Gym>> { Error = false, Message = "Returned successfully", ReturnResult = result };
        }

        public async Task<ResponseResult<Gym>> GetGym(Guid gymId)
        {
            var result = _context.Gyms.Include(x => x.Offers).FirstOrDefault(x => x.Id == gymId);
            return new ResponseResult<Gym> { Error = false, Message = "Returned successfully", ReturnResult = result };
        }

        public async Task<ResponseResult<Gym>> DeleteGym(Guid gymId)
        {
            var gym = GetGym(gymId).Result.ReturnResult;
            bool flag = false;
            string message = "";
            try
            {
                var result = _context.Gyms.Remove(gym);
                message = "Gym deleted successfully";
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                flag = true;
                message = ex.Message;
                return new ResponseResult<Gym> { Error = false, Message = "Returned successfully", ReturnResult = gym };
            }
            return new ResponseResult<Gym> { Error = false, Message = "Returned successfully", ReturnResult = null };
        }

        public async Task<ResponseResult<ICollection<Gym>>> GetGymsByOwnerId(Guid userId)
        {
            var result = _context.Gyms.Include(x=>x.Offers).Where(a => a.OwnerId == userId).ToList();
            return new ResponseResult<ICollection<Gym>> { Error = false, Message = "Returned successfully", ReturnResult = result };
        }
    }
}
