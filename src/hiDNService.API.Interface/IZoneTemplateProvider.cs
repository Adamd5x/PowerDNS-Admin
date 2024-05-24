using ErrorOr;
using hiDNService.API.Abstract.ZoneTemplate;

namespace hiDNService.API.Interface;

public interface IZoneTemplateProvider
{
    Task<ErrorOr<IEnumerable<ZoneTemplateResponse>>> GetTemplatesAsync ();
    Task<ErrorOr<ZoneTemplateDetailsResponse>> GetTemplateAsync (string id);
    Task<ErrorOr<ZoneTemplateDetailsResponse>> CreateAsync (ZoneTemplateRequest template);
    Task<ErrorOr<ZoneTemplateDetailsResponse>> UpdateAsync (ZoneTemplateRequest template);
    Task<ErrorOr<bool>> DeleteAsync (string templateId);

    Task<ErrorOr<IEnumerable<ZoneTemplateRecord>>> GetRecordsAsync (string templateId);
    Task<ErrorOr<ZoneTemplateRecord>> GetRecordAsync (string templateId, string recordId);
    Task<ErrorOr<ZoneTemplateDetailsResponse>> CreateRecordAsync(string templateId, ZoneTemplateRecord record);
    Task<ErrorOr<ZoneTemplateDetailsResponse>> UpdateRecordAsync(string templateId, string recordId, ZoneTemplateRecord record);
    Task<ErrorOr<bool>> DeleteRecordAsync (string templateId, string recordId);
}
