using Microsoft.EntityFrameworkCore;
using SportsConnected.Context;
using SportsConnected.DTO;
using SportsConnected.Models;
using SportsConnected.Services.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsConnected.Services
{
    public class UsersService : IUsersService
    {
        private readonly SportsConnectedContext _context;

        public UsersService(SportsConnectedContext context) {
            _context = context;
        }

        public async Task<ResponseResult<User>> AddNewUser(User newUser) {
            var userInDb = _context.Users.FirstOrDefault(u => u.Email == newUser.Email);
            string message;
            bool errFlag = false;
            if (userInDb != null)
            {
                message = "User with that email already exists";
                errFlag = true;
            }
            else
            {
                _context.Users.Add(newUser);
                await _context.SaveChangesAsync();
                message = "User added successfully";
            }

            return new ResponseResult<User> { Error = errFlag, Message = message, ReturnResult = userInDb };
        }

        public async Task<ResponseResult<ICollection<User>>> GetAllUsers()
        {
            var users =  _context.Users.ToList();
            return new ResponseResult<ICollection<User>> { Error = false, Message = "All users returned successfully", ReturnResult = users };
        }

        public async Task<ResponseResult<User>> ValidateUserLogin(LoginFormModel login) {
            string message;
            bool errFlag = true;

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == login.Email);
            if (user != null)
            {
                if (user.Password != login.Password)
                {
                    message = "Password does not match";
                    user = null;
                }
                else 
                {
                    message = "Logged in successfully";
                    errFlag = false;
                }
            }
            else
            {
                message = "There are no users with that email";
            }

            return new ResponseResult<User> { Error = errFlag, Message = message, ReturnResult = user };
        }


    }
}
