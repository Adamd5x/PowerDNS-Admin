﻿using System.Net.Mime;
using Microsoft.AspNetCore.Mvc;

namespace hiDNService.API.Controllers
{
    [Route ("api/[controller]")]
    [ApiController]
    [Produces(MediaTypeNames.Application.Json)]
    public class InitController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok ();
        }
    }
}
