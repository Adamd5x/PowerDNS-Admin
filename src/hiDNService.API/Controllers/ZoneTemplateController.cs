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
        private static IEnumerable<ZoneTemplateResponse> Templates
        {
            get => new List<ZoneTemplateResponse> () {
                new (){ Id = "a49d6c13-143b-11ef-93ac-a6c88ff1cec2", Name = "Template #1", Active = true, Records = 1 },
                new (){ Id = "a49d9312-143b-11ef-92d3-e9e5bf30febf", Name = "Template #2", Active = true, Records = 0 },
                new () { Id = "ce0535c3-143b-11ef-8375-7d91919f1c68", Name = "Template #3", Active = true, Records = 0 },
                new (){ Id = "6665297a-1527-11ef-ba69-c2570d1147b2", Name = "Template #4", Active = true, Records = 1 },
                new (){ Id = "6665297a-1527-11ef-ba69-f9a817766e44", Name = "Template #5", Active = true, Records = 0 },
                new () { Id = "66655152-1527-11ef-9291-5b7b72007480", Name = "Template #6", Active = true, Records = 0 },
                new () { Id = "66655152-1527-11ef-9291-b95e61ec6d03", Name = "hiDNService .eu", Active = true, Records = 5 },
                new () { Id = "66655152-1527-11ef-9291-ca5ce0b09532", Name = "hiDNService .pl", Active = true, Records = 5 },
                new () { Id = "66655152-1527-11ef-9291-8a4c2a685180", Name = "hiDNService .com", Active = true, Records = 5 },
            };
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<ZoneTemplateResponse>))]
        public IActionResult Get()
        {
            return Ok(Templates);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ZoneTemplateResponse))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ProblemDetails))]
        public IActionResult Get([FromRoute] string id)
        {
            if (string.IsNullOrWhiteSpace(id) || !Guid.TryParse(id, out _)) 
            {
                return BadRequest ();
            }

            ZoneTemplateResponse? response = Templates.FirstOrDefault(x => x.Id.ToLower().Equals(id.ToLower()));

            if (response is null)
            {
                return NotFound();
            }
            return Ok(response);
        }
    }
}
