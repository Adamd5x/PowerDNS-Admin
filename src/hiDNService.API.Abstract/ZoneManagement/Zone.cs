namespace hiDNService.API.Abstract.ZoneManagement;

public sealed class Zone : BaseEntry
{
    public bool IsEnabled { get; set; }
    public bool IsSuspended { get; set; }
    public IEnumerable<ZoneRecord>? Records { get; set; }
}
