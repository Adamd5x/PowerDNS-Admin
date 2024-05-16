using System.Net.Mime;
using hiDNService.API.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace hiDNService.API.Controllers
{
    [Route ("api/[controller]")]
    [ApiController]
    [Produces (MediaTypeNames.Application.Json)]
    public class LicenseController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType (StatusCodes.Status200OK, Type = typeof (LicenseDetails))]
        [ProducesResponseType (StatusCodes.Status400BadRequest)]
        public IActionResult Get ()
        {
            LicenseDetails license = new();
            return Ok (license);
        }


        [HttpGet("checklicense")]
        [ProducesResponseType (StatusCodes.Status200OK, Type = typeof (bool))]
        [ProducesResponseType (StatusCodes.Status400BadRequest)]
        public IActionResult LicenseCheck ([FromRoute] string? licenseNo)
        {
            bool isValid = (licenseNo is not null);
            if (isValid)
            {
                LicenseDetails license = new();
                isValid =  license.No.Equals(licenseNo, StringComparison.OrdinalIgnoreCase);
            }
            return Ok (isValid);
        }
    }
}
