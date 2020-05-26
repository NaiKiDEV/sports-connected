using SportsConnected.DTO;
using SportsConnected.Entities;
using SportsConnected.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsConnected.Services.ServiceInterfaces
{
    public interface IUsersService
    {
        Task<ResponseResult<User>> ValidateUserLogin(LoginFormModel login);
        Task<ResponseResult<User>> AddNewUser(User newUser);
        Task<ResponseResult<ICollection<User>>> GetAllUsers();
        Task<ResponseResult<User>> GetUser(Guid id);
        Task<ResponseResult<Membership>> AddMemberShip(Membership membership);
        Task<ResponseResult<Membership>> EditMemberShip(Membership membership);
        Task<ResponseResult<Membership>> DeleteMemberShip(Guid membershipId);
        Task<ResponseResult<Membership>> GetMemberShip(Guid membershipId);
        Task<ResponseResult<ICollection<Membership>>> GetAllMemberShips();
    }
}
