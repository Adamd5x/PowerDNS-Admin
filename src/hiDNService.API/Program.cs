using System.Text.Json.Serialization;
using hiDNService.API.Core;
using hiDNService.API.Infrastructure;
using hiDNService.API.Infrastructure.Database;
using hiDNService.API.Service;
using Microsoft.EntityFrameworkCore;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseSerilog ((hostingCtx, configuration) => {
    configuration.ReadFrom.Configuration (hostingCtx.Configuration);
});

//builder.Services.AddHostedService<StatisticsService> ();

builder.Services.AddInfrastructure (builder.Configuration)
                .AddCoreServices();

builder.Services.AddControllers ()
                .AddJsonOptions(options => {
                    JsonStringEnumConverter enumConverter = new ();
                    options.JsonSerializerOptions.Converters.Add (enumConverter);
                });

builder.Services.AddEndpointsApiExplorer ();
builder.Services.AddSwaggerGen ();

builder.Services.AddCors (options => options.AddDefaultPolicy (policy => {
        policy.AllowAnyHeader();
        policy.AllowAnyMethod ();
        policy.AllowAnyOrigin ();
    }));

var app = builder.Build();

using var scope = app.Services.CreateScope ();
var dbContext = scope.ServiceProvider.GetService<ApiDbContext>();
if (dbContext is not null)
{
    var pendingMigrations = await dbContext.Database.GetPendingMigrationsAsync();
    if (pendingMigrations.Any())
    {
        await dbContext.Database.MigrateAsync ();
    }
}


if (app.Environment.IsDevelopment ())
{
    app.UseSwagger ();
    app.UseSwaggerUI ();
}

app.UseCors ();

app.UseHttpsRedirection ();

app.UseAuthorization ();

app.MapControllers ();

app.Run ();
