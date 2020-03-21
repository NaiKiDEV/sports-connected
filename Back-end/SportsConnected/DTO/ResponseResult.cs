using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsConnected.DTO
{
    public class ResponseResult<T>
    {
        public bool Error { get; set; }
        public string Message { get; set; }
        public T ReturnResult { get; set; }
    }
}
