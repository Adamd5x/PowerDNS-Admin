using hiDNService.API.Model.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace hiDNService.API.Infrastructure.Database.EntityConfig;

internal class ZoneTemplateEntityConfiguration : IEntityTypeConfiguration<ZoneTemplate>
{
    public void Configure (EntityTypeBuilder<ZoneTemplate> builder)
    {
        builder.ToTable ($"{Prefixes.Table}{nameof(ZoneTemplate)}");

        builder.HasKey (k => k.ItemId);

        builder.HasIndex(i => i.Name);

        builder.Property(p => p.ItemId)
               .IsFixedLength()
               .HasMaxLength(36)
               .HasColumnType("varchar")
               .IsRequired ();

        builder.Property (p => p.Name)
               .HasMaxLength(50)
               .HasColumnType ("varchar")
               .IsRequired ();

        builder.Property (p => p.Description)
               .HasMaxLength (255);

        builder.HasMany (o => o.Records)
               .WithOne (o => o.ZoneTemplate)
               .HasForeignKey (k => k.ZoneTemplateId);
    }
}
