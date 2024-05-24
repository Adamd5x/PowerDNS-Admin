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
            ItemId = Guid.NewGuid().ToString().ToLower(),
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

    public async Task<ErrorOr<ZoneTemplateDetailsResponse>> CreateRecordAsync (string templateId, ZoneTemplateRecord record)
    {
        string normalizedId = templateId.ToLower();

        Entity.ZoneTemplateRecord newRecord = new()
        {
            ItemId = Guid.NewGuid().ToString(),
            Name = record.Name,
            Description = record.Description,
            Data = record.Data,
            TTL = record.Ttl,
            Type = nameof(record.Type),
            IsActive = record.Active,
            ZoneTemplateId = normalizedId,
        };

        apiDbContext.ZoneTemplateRecords.Add (newRecord);
        bool saved = (await apiDbContext.SaveChangesAsync () > 0);

        if (saved)
        {
            return await GetTemplateAsync(normalizedId);
        }
        return Error.Failure ();
    }

    public async Task<ErrorOr<bool>> DeleteAsync (string templateId)
    {
        string normalizedId = templateId.ToLower();
        try
        {
            await apiDbContext.Database.BeginTransactionAsync ();

            var items = await apiDbContext.ZoneTemplateRecords
                                          .Where(x => x.ItemId.ToLower().Equals(normalizedId))
                                          .ToListAsync();
    
            apiDbContext.ZoneTemplateRecords.RemoveRange(items);

            apiDbContext.ZonesTemplates.Remove (new Entity.ZoneTemplate { ItemId = templateId });

            await apiDbContext.SaveChangesAsync ();

            await apiDbContext.Database.CommitTransactionAsync ();
            return true;
        }
        catch(Exception ex)
        {
            await apiDbContext.Database.RollbackTransactionAsync ();
            logger.LogError ("Error while deleting Zone Template, exception: {ex}", ex);
            return Error.Failure ();
        }
    }

    public async Task<ErrorOr<bool>> DeleteRecordAsync (string templateId, string recordId)
    {
        apiDbContext.ZoneTemplateRecords.Remove (new Entity.ZoneTemplateRecord { ItemId = recordId});
        return (await apiDbContext.SaveChangesAsync () > 0);
    }

    public async Task<ErrorOr<ZoneTemplateRecord>> GetRecordAsync (string templateId, string recordId)
    {
        string normalizedId = templateId.ToLower();
        string normalizedRecordId = recordId.ToLower();

        var result = await apiDbContext.ZoneTemplateRecords
                                       .FirstOrDefaultAsync(x => x.ZoneTemplateId.ToLower().Equals(normalizedId) &&
                                                                 x.ItemId.ToLower().Equals(normalizedRecordId));

        if (result is null)
        {
            return Error.NotFound ();
        }

        return new ZoneTemplateRecord
        {
            Id = result.ItemId,
            Name = result.Name,
            Type = Enum.Parse<RecordType>(result.Type),
            Data = result.Data,
            Ttl = result.TTL,
            Active = result.IsActive,
            Description = result.Description
        };
    }

    public async Task<ErrorOr<IEnumerable<ZoneTemplateRecord>>> GetRecordsAsync (string templateId)
    {
        string normalizedId = templateId.ToLower();

        return await apiDbContext.ZoneTemplateRecords
                                 .Where (x => x.ZoneTemplateId.ToLower().Equals (normalizedId))
                                 .Select (x => new ZoneTemplateRecord
                                 {
                                     Id = x.ItemId,
                                     Name = x.Name,
                                     Data = x.Data,
                                     Ttl = x.TTL,
                                     Active = x.IsActive,
                                     Description = x.Description,
                                     Type = Enum.Parse<RecordType> (x.Type)
                                 }).ToListAsync();
    }

    public async Task<ErrorOr<ZoneTemplateDetailsResponse>> GetTemplateAsync (string id)
    {
        string normalizedId = id.ToLower();

        var result = await apiDbContext.ZonesTemplates
                              .Include(x => x.Records)
                              .FirstOrDefaultAsync(x => x.ItemId.ToLower().Equals (normalizedId));

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

    public Task<ErrorOr<ZoneTemplateDetailsResponse>> UpdateAsync (string templateId, ZoneTemplateRequest template)
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
