using System.Net.Mime;
using hiDNService.API.Abstract.ZoneManagement;
using Microsoft.AspNetCore.Mvc;

namespace hiDNService.API.Controllers
{
    [Route ("api/[controller]")]
    [ApiController]
    [Produces (MediaTypeNames.Application.Json)]
    public class ZoneManagementController : ControllerBase
    {

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<Zone>))]
        public IActionResult Get ()
        {
            Thread.Sleep (2000);
            return Ok ();
        }

        [HttpGet("{id}")]
        [ProducesResponseType (StatusCodes.Status200OK, Type = typeof (Zone))]
        [ProducesResponseType (StatusCodes.Status400BadRequest, Type = typeof (ProblemDetails))]
        [ProducesResponseType (StatusCodes.Status404NotFound, Type = typeof (ProblemDetails))]
        public IActionResult Get ([FromRoute] string id)
        {
            Zone response = new()
            {
                Id = id,
                Name = "example.com"
            };

            Thread.Sleep (2000);
            return Ok (response);
        }
    }
}
