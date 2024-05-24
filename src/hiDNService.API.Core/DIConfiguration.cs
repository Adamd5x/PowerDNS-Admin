using hiDNService.API.Core.Zone;
using hiDNService.API.Core.ZoneTemplate;
using hiDNService.API.Interface;
using Microsoft.Extensions.DependencyInjection;

namespace hiDNService.API.Core
{
    public static class DIConfiguration
    {
        public static IServiceCollection AddCoreServices(this IServiceCollection services)
        {

            services.AddScoped<IZoneTemplateProvider, ZoneTemplateProvider> ();
            services.AddScoped<IZoneProvider, ZoneProvider> ();

            return services;
        }

    }
}
