using System.Text.Json.Serialization;
using hiDNService.API.Core;
using hiDNService.API.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.



builder.Services.AddInfrastructure ()
                .AddCoreServices();

builder.Services.AddControllers ()
                .AddJsonOptions(options => {
                    JsonStringEnumConverter enumConverter = new ();
                    options.JsonSerializerOptions.Converters.Add (enumConverter);
                });

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer ();
builder.Services.AddSwaggerGen ();

builder.Services.AddCors (options => options.AddDefaultPolicy (policy => {
        policy.AllowAnyHeader();
        policy.AllowAnyMethod ();
        policy.AllowAnyOrigin ();
    }));

var app = builder.Build();

// Configure the HTTP request pipeline.
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
