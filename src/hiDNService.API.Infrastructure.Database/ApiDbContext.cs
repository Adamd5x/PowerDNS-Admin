using System.Reflection;
using hiDNService.API.Infrastructure.Database.EntityConfig;
using Microsoft.EntityFrameworkCore;

namespace hiDNService.API.Infrastructure.Database;

public partial class ApiDbContext : DbContext
{
    public ApiDbContext(DbContextOptions<ApiDbContext> ctx): base(ctx) 
    { }

    protected override void OnModelCreating (ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        //modelBuilder.ApplyConfiguration (new ZoneTemplateEntityConfiguration ());
        //modelBuilder.ApplyConfiguration(new ZoneTemplateRecordEntityConfiguration ());
    }
}
