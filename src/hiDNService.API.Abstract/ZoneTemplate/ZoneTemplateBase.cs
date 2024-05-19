using System.ComponentModel.DataAnnotations;

namespace hiDNService.API.Abstract.ZoneTemplate;

public abstract class ZoneTemplateBase
{
    [Required]
    public string Id { get; set; } = null!;

    [Required]
    public string Name { get; set; } = null!;
    public bool Active { get; set; } = true;
}
