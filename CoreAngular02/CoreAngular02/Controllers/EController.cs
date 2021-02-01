using CoreAngular02.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreAngular02.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            List<Email> emails = SQLcmdEmail.SQLcmdData();
            String hingeString = Newtonsoft.Json.JsonConvert.SerializeObject(emails);
            return hingeString;
        }
    }
}
