using System.Net.Mime;
using Microsoft.AspNetCore.Mvc;

namespace hiDNService.API.Controllers
{
    [Route ("api/[controller]")]
    [ApiController]
    [Produces(MediaTypeNames.Application.Json)]
    public class InitController : ControllerBase
    {
        private const string ApiUrl = "https://localhost:44313/api";

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Dictionary<string, string>))]
        public IActionResult EndPoints()
        {
            var endpoints = new Dictionary<string, string>()
            {
                { "api", $"{ApiUrl}"},
                { "licenseCheck", $"{ApiUrl}/license"},
                {"logging", $"{ApiUrl}/logging" },
            };
            return Ok (endpoints);
        }
    }
}
