using SportsConnected.DTO;
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
    }
}
