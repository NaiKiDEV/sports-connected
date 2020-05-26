using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportsConnected.DTO;
using SportsConnected.Entities;
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


        [HttpGet("{id}")]
        public async Task<ActionResult<ResponseResult<User>>> GetAllUsers(Guid id)
        {
            var result = await _usersService.GetUser(id);
            return result;
        }

        [HttpPost("membership")]
        public async Task<ActionResult<ResponseResult<Membership>>> AddMembership([FromBody]Membership membership)
        {
            var result = await _usersService.AddMemberShip(membership);
            return result;
        }

        [HttpPut("membership")]
        public async Task<ActionResult<ResponseResult<Membership>>> EditMembership([FromBody]Membership membership)
        {
            var result = await _usersService.EditMemberShip(membership);
            return result;
        }

        [HttpDelete("membership/{id}")]
        public async Task<ActionResult<ResponseResult<Membership>>> DeleteMembership(Guid id)
        {
            var result = await _usersService.DeleteMemberShip(id);
            return result;
        }
        [HttpGet("membership/{id}")]
        public async Task<ActionResult<ResponseResult<Membership>>> GetMembership(Guid id)
        {
            var result = await _usersService.GetMemberShip(id);
            return result;
        }

        [HttpGet("membership")]
        public async Task<ActionResult<ResponseResult<Membership>>> GetMemberships()
        {
            var result = await _usersService.GetAllMemberShips();
            return result;
        }

    }

}