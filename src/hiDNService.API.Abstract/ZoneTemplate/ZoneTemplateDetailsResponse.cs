namespace hiDNService.API.Abstract.ZoneTemplate;

public sealed class ZoneTemplateDetailsResponse : ZoneTemplateBase
{
    public string? Description { get; set; }
    public IEnumerable<ZoneTemplateRecord>? Records { get; set; }
}
