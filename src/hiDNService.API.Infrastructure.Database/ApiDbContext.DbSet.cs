using hiDNService.API.Model.Entity;
using Microsoft.EntityFrameworkCore;

namespace hiDNService.API.Infrastructure.Database
{
    public partial class ApiDbContext
    {
        public DbSet<ZoneTemplate> ZonesTemplates { get; set; }

        public DbSet<ZoneTemplateRecord> ZoneTemplateRecords { get; set; }
    }
}
