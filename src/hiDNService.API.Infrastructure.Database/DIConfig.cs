using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace hiDNService.API.Infrastructure.Database
{
    public static class DIConfig
    {
        public static IServiceCollection AddDatabase(this IServiceCollection services, IConfiguration configuration)
        {
            string connectionString = configuration.GetConnectionString("default")!;

            services.AddDbContext<ApiDbContext> (options => {
                options.UseSqlite (connectionString);
            });

            return services;
        }
    }
}
