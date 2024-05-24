using ErrorOr;
using hiDNService.API.Abstract.ZoneTemplate;
using hiDNService.API.Infrastructure.Database;
using hiDNService.API.Interface;
using hiDNService.API.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Entity = hiDNService.API.Model.Entity;

namespace hiDNService.API.Core.ZoneTemplate;

public sealed class ZoneTemplateProvider : IZoneTemplateProvider, IDisposable
{
    private readonly ILogger<ZoneTemplateProvider> logger;
    private readonly ApiDbContext apiDbContext;

    public ZoneTemplateProvider(DbContextOptions<ApiDbContext> ctxOptions, ILogger<ZoneTemplateProvider> logger)
    {
        this.logger = logger;
        apiDbContext = new ApiDbContext(ctxOptions);
    }

    public async Task<ErrorOr<ZoneTemplateDetailsResponse>> CreateAsync (ZoneTemplateRequest template)
    {
        Entity.ZoneTemplate newTemplate = new() 
        { 
            ItemId = Guid.NewGuid().ToString(),
            Name = template.Name,
            Description = template.Description,
            IsActive = template.Active
        };

        apiDbContext.ZonesTemplates.Add (newTemplate);
        bool saved = (await apiDbContext.SaveChangesAsync () > 0);
        if (saved)
        {
            return await GetTemplateAsync (newTemplate.ItemId);
        }
        return Error.Failure ();
    }

    public Task<ErrorOr<ZoneTemplateDetailsResponse>> CreateRecordAsync (string templateId, ZoneTemplateRecord record)
    {
        throw new NotImplementedException ();
    }

    public Task<ErrorOr<bool>> DeleteAsync (string templateId)
    {
        throw new NotImplementedException ();
    }

    public Task<ErrorOr<bool>> DeleteRecordAsync (string templateId, string recordId)
    {
        throw new NotImplementedException ();
    }

    public Task<ErrorOr<ZoneTemplateRecord>> GetRecordAsync (string templateId, string recordId)
    {
        throw new NotImplementedException ();
    }

    public Task<ErrorOr<IEnumerable<ZoneTemplateRecord>>> GetRecordsAsync (string templateId)
    {
        throw new NotImplementedException ();
    }

    public async Task<ErrorOr<ZoneTemplateDetailsResponse>> GetTemplateAsync (string id)
    {

        var result = await apiDbContext.ZonesTemplates
                              .Include(x => x.Records)
                              .FirstOrDefaultAsync(x => x.ItemId.Equals (id, StringComparison.CurrentCultureIgnoreCase));

        if (result is null)
        {
            return Error.NotFound();
        }

        ZoneTemplateDetailsResponse response = new ()
        {
            Id = result.ItemId,
            Name = result.Name,
            Active = result.IsActive,
            Description = result.Description,
            Records = result.Records?.Select(x => new ZoneTemplateRecord()
            {
                Id = x.ItemId,
                Name = x.Name,
                Active = x.IsActive,
                Description = x.Description,
                Data = x.Data,
                Ttl = x.TTL,
                Type = Enum.Parse<RecordType>(x.Type)
            }) ?? []
        };

        return response;
    }

    public async Task<ErrorOr<IEnumerable<ZoneTemplateResponse>>> GetTemplatesAsync ()
    {
        var result = await apiDbContext.ZonesTemplates
                                       .Include(x => x.Records)
                                       .Select(x => new ZoneTemplateResponse() {
                                           Id = x.ItemId,
                                           Name = x.Name,
                                           Active = x.IsActive,
                                           Records = x.Records.Count
                                       })
                                       .ToListAsync();
        return result;
    }

    public Task<ErrorOr<ZoneTemplateDetailsResponse>> UpdateAsync (ZoneTemplateRequest template)
    {
        throw new NotImplementedException ();
    }

    public Task<ErrorOr<ZoneTemplateDetailsResponse>> UpdateRecordAsync (string templateId, string recordId, ZoneTemplateRecord record)
    {
        throw new NotImplementedException ();
    }

    public void Dispose ()
    {
        apiDbContext.Dispose ();
    }
}
