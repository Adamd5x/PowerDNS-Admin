namespace hiDNService.API.Model.Entity;

public class ZoneTemplate : Entity
{
    public string Name { get; set; } = null!;

    public string? Description { get; set; }

    public bool IsActive { get; set; }

    public ICollection<ZoneTemplateRecord> Records { get; set; } = null!;
}
