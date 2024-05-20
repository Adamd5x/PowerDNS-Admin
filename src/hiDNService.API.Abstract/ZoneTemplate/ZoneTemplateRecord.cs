using System.ComponentModel.DataAnnotations;
using hiDNService.API.Model;

namespace hiDNService.API.Abstract.ZoneTemplate;

public sealed class ZoneTemplateRecord : ZoneTemplateBase
{
    [Required] public RecordType Type {  get; set; }
    public int? Ttl { get; set; } = 3600;
    public string? Data { get; set; }    
    public string? Description { get; set; }
}
