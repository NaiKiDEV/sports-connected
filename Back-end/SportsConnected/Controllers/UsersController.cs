using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportsConnected.DTO;
using SportsConnected.Models;
using SportsConnected.Services.ServiceInterfaces;

namespace SportsConnected.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUsersService _usersService;
        
        public UsersController(IUsersService usersService) {
            _usersService = usersService;
        }

        // api/users/add
        [HttpPost]
        [Route("add")]
        public async Task<ActionResult<ResponseResult<User>>> AddNewUser([FromBody]User newUser) {
            var result = await _usersService.AddNewUser(newUser);
            return result;
        }

        [HttpPost]
        [Route("validate")]
        public async Task<ActionResult<ResponseResult<User>>> ValidateLogin([FromBody] LoginFormModel loginForm) {
            var result = await _usersService.ValidateUserLogin(loginForm);
            return result;
        }

        // api/all
        [HttpGet("all")]
        public async Task<ActionResult<ResponseResult<ICollection<User>>>> GetAllUsers() {
            var result = await _usersService.GetAllUsers();
            return result;
        }
    }
}