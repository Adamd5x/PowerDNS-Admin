using System.Net.Mime;
using hiDNService.API.Abstract.ZoneTemplate;
using hiDNService.API.Interface;
using Microsoft.AspNetCore.Mvc;

namespace hiDNService.API.Controllers
{
    [Route ("api/[controller]")]
    [ApiController]
    [Produces (MediaTypeNames.Application.Json)]
    public class ZoneTemplateController : ControllerBase
    {
        private readonly IZoneTemplateProvider zoneTemplateProvider;

        public ZoneTemplateController (IZoneTemplateProvider zoneTemplateProvider)
        {
            this.zoneTemplateProvider = zoneTemplateProvider;
        }

        [HttpGet]
        [ProducesResponseType (StatusCodes.Status200OK, Type = typeof (IEnumerable<ZoneTemplateResponse>))]
        public async Task<IActionResult> Get ()
        {
            var result = await zoneTemplateProvider.GetTemplatesAsync();
            return Ok (result.Value);
        }

        [HttpGet ("{id}")]
        [ProducesResponseType (StatusCodes.Status200OK, Type = typeof (ZoneTemplateDetailsResponse))]
        [ProducesResponseType (StatusCodes.Status400BadRequest, Type = typeof (ProblemDetails))]
        [ProducesResponseType (StatusCodes.Status404NotFound, Type = typeof (ProblemDetails))]
        public async Task<IActionResult> Get ([FromRoute] string id)
        {
            if (string.IsNullOrWhiteSpace (id) || !Guid.TryParse (id, out _))
            {
                return BadRequest ();
            }

            var response = await zoneTemplateProvider.GetTemplateAsync(id);

            if (response.IsError && response.FirstError.Type == ErrorOr.ErrorType.NotFound)
            {
                return NotFound ();
            }
            return Ok (response.Value);
        }

        [HttpPost]
        [ProducesResponseType (StatusCodes.Status201Created, Type = typeof (ZoneTemplateDetailsResponse))]
        [ProducesResponseType (StatusCodes.Status400BadRequest, Type = typeof (ProblemDetails))]
        [ProducesResponseType (StatusCodes.Status500InternalServerError, Type = typeof (ProblemDetails))]
        public async Task<IActionResult> Create ([FromBody] ZoneTemplateRequest template)
        {
            var result = await zoneTemplateProvider.CreateAsync(template);
            if (result.IsError)
            {
                return BadRequest ();
            }
            return Created ();
        }

        [HttpPut ("{templateId}")]
        [ProducesResponseType (StatusCodes.Status202Accepted, Type = typeof (ZoneTemplateDetailsResponse))]
        [ProducesResponseType (StatusCodes.Status400BadRequest, Type = typeof (ProblemDetails))]
        [ProducesResponseType (StatusCodes.Status500InternalServerError, Type = typeof (ProblemDetails))]
        public async Task<IActionResult> Update ([FromRoute] string templateId, [FromBody] ZoneTemplateRequest template)
        {
            var result = await zoneTemplateProvider.UpdateAsync(templateId, template);
            return Accepted ();
        }

        [HttpDelete ("{templateId}")]
        public async Task<IActionResult> Delete (string templateId)
        {
            var result = await zoneTemplateProvider.DeleteAsync(templateId);
            return Ok ();
        }

        [HttpPost("{templateId}/record")]
        [ProducesResponseType (StatusCodes.Status201Created)]
        [ProducesResponseType (StatusCodes.Status400BadRequest, Type = typeof (ProblemDetails))]
        [ProducesResponseType (StatusCodes.Status500InternalServerError, Type = typeof (ProblemDetails))]
        public async Task<IActionResult> CreateRecord ([FromRoute] string templateId, [FromBody] ZoneTemplateRecord record)
        {
            return Created ();
        }

        [HttpPut("{templateId}/record/{recordId}")]
        [ProducesResponseType (StatusCodes.Status202Accepted)]
        [ProducesResponseType (StatusCodes.Status404NotFound, Type = typeof (ProblemDetails))]
        public async Task<IActionResult> UpdateRecord ([FromRoute] string templateId, [FromRoute] string recordId, [FromBody] ZoneTemplateRecord record)
        {
            return Accepted ();
        }

        [HttpDelete("{templateId}/record/{recordId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType (StatusCodes.Status400BadRequest, Type = typeof (ProblemDetails))]
        [ProducesResponseType (StatusCodes.Status404NotFound, Type = typeof (ProblemDetails))]
        public async Task<IActionResult> DeleteRecord ([FromRoute] string templateId, [FromRoute] string recordId)
        {
            return Ok ();
        }
    }
}
