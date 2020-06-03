using SportsConnected.DTO;
using SportsConnected.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsConnected.Services.ServiceInterfaces
{
    public interface IGymsService
    {
        Task<ResponseResult<Gym>> AddNewGym(Gym newGym);
        Task<ResponseResult<ICollection<Gym>>> GetAllGyms();
        Task<ResponseResult<ICollection<Gym>>> GetGymsByOwnerId(Guid userId);
        Task<ResponseResult<Gym>> GetGym(Guid gymId);
        Task<ResponseResult<Gym>> DeleteGym(Guid gymId);
        Task<ResponseResult<Gym>> UpdateGym(Gym gym);
    }
}
