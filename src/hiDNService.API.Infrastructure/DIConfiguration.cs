using hiDNService.API.Infrastructure.Database;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace hiDNService.API.Infrastructure
{
    public static class DIConfiguration
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration )
        {
            services.AddDatabase (configuration);
            return services;
        }
    }
}
