using System.Net.Mime;
using hiDNService.API.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace hiDNService.API.Controllers
{
    [Route ("api/[controller]")]
    [ApiController]
    [Produces (MediaTypeNames.Application.Json)]
    public class ZoneTemplateController : ControllerBase
    {


        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<ZoneTemplateResponse>))]
        public IActionResult Get()
        {
            var response = new List<ZoneTemplateResponse>()
            {
                new (){ Id = "a49d6c13-143b-11ef-93ac-a6c88ff1cec2", Name = "Template #1", Active = true, Records = 1 },
                new (){ Id = "a49d9312-143b-11ef-92d3-e9e5bf30febf", Name = "Template #2", Active = true, Records = 0 },
                new (){ Id = "ce0535c3-143b-11ef-8375-7d91919f1c68", Name = "Template #3", Active = true, Records = 0 },
                new (){ Id = "ce0535c3-143b-11ef-8375-54e99ab8ed17", Name = "hiDNService eu template", Active = true, Records = 5 },
            };
            return Ok(response);
        }
    }
}
