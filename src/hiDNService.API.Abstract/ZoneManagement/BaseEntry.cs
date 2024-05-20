using System.ComponentModel.DataAnnotations;

namespace hiDNService.API.Abstract.ZoneManagement;

public abstract class BaseEntry
{
    [Required] public string Id { get; set; } = null!;

    [Required] public string Name { get; set; } = null!;
}
