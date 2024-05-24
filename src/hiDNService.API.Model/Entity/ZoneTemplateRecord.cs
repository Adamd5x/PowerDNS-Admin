namespace hiDNService.API.Model.Entity;

public class ZoneTemplateRecord : Entity
{
    public string Name { get; set; } = null!;
    public string Type { get; set; } = null!;
    public int? TTL { get; set; }
    public string? Data { get; set; }
    public string? Description { get; set; }
    public bool IsActive {  get; set; }
    public string ZoneTemplateId { get; set; } = null!;
    public ZoneTemplate ZoneTemplate { get; set; } = null!;
}
