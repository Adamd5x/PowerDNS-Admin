using System.ComponentModel.DataAnnotations;

namespace hiDNService.API.Abstract.ZoneTemplate;

public sealed class ZoneTemplateRecord : ZoneTemplateBase
{
    [Required]
    public string Type {  get; set; } = null!;
    public int? Ttl { get; set; } = 3600;
    public string? Data { get; set; }    
    public string? Description { get; set; }
}
