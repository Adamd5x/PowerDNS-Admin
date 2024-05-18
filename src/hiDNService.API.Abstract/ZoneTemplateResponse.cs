namespace hiDNService.API.Abstract;

public sealed class ZoneTemplateResponse
{
    public string Id { get; set; } = null!;
    public string Name { get; set; } = null!;
    public bool Active { get; set; } = true;
    public int Records { get; set; } = 0;
}
