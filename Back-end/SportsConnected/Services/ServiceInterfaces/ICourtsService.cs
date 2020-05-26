using SportsConnected.DTO;
using SportsConnected.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsConnected.Services.ServiceInterfaces
{
    public interface ICourtsService
    {
        Task<ResponseResult<Court>> AddNewCourt(Court newCourt);
        Task<ResponseResult<Court>> GetCourt(Guid courtId);
        Task<ResponseResult<ICollection<Court>>> GetAllCourts();
        Task<ResponseResult<ICollection<Court>>> GetCourtsByOwnerId(Guid userId);
        Task<ResponseResult<Court>> DeleteCourt(Guid courtId);
    }
}
