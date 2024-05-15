using System.Net.Mime;
using Microsoft.AspNetCore.Mvc;

namespace hiDNService.API.Controllers
{
    [Route ("api/[controller]")]
    [ApiController]
    [Produces (MediaTypeNames.Application.Json)]
    public class LoggingController : ControllerBase
    {
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public IActionResult AddEntry ([FromBody] string entry)
        {
            return Created ();
        }
    }
}
