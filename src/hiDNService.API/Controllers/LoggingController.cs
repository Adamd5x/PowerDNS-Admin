using System.Net.Mime;
using Microsoft.AspNetCore.Mvc;

namespace hiDNService.API.Controllers
{
    [Route ("api/[controller]")]
    [ApiController]
    [Produces (MediaTypeNames.Application.Json)]
    public class LoggingController : ControllerBase
    {
        private readonly string[] LoggingHeaders = ["x-hipoweradmin-logging", "x-hipoweradmin-loggin-type"];
        private enum LogTypes
        {
            None = 0,
            Information,
            Warning,
            Error,
            CriticalError
        }

        private readonly ILogger<LoggingController> logger;

        public LoggingController(ILogger<LoggingController> logger)
        {
            this.logger = logger;
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ProblemDetails))]
        public IActionResult AddEntry ([FromBody] string entry)
        {
            string requestedHost = HttpContext.Request.Host.Host;

            var requiredHeaders = HttpContext.Request
                                             .Headers
                                             .Where(x => LoggingHeaders.Contains(x.Key.ToLower()))
                                             .Select(x => new {header = x.Key.ToLower(), value = x.Value });

            string loggingHeaderValue = requiredHeaders.FirstOrDefault(x => x.header.Equals(LoggingHeaders[0]))?.value.ToString() ?? false.ToString();            
            string loggingTypeHeader = requiredHeaders.FirstOrDefault(x => x.header.Equals(LoggingHeaders[1]))?
                                                  .value.ToString() ?? string.Empty;

            bool loggingEnable = bool.Parse(loggingHeaderValue) && !string.IsNullOrWhiteSpace(loggingTypeHeader) ;

            if (loggingEnable)
            {
                LogTypes logEntryType = Enum.Parse<LogTypes>(loggingTypeHeader);
                switch (logEntryType)
                {
                    case LogTypes.Information:
                        logger.LogInformation ("Requested host: {host}, info: {entry} ", requestedHost, entry);
                        break;
                    case LogTypes.Warning:
                        logger.LogWarning ("Requested host: {host}, warning: {entry}", requestedHost, entry);
                        break;
                    case LogTypes.Error:
                        logger.LogError ("Requested host: {host}, error: {error}", requestedHost, entry);
                        break;
                    case LogTypes.CriticalError:
                        logger.LogCritical ("Requested host: {host}, critical: {error}", requestedHost, entry);
                        break;
                    default:
                        return BadRequest ();
                }
                return Created ();
            }

            return BadRequest ();
        }
    }
}
