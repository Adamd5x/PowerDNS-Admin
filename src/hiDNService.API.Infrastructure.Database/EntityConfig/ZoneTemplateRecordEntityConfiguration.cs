using hiDNService.API.Model.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace hiDNService.API.Infrastructure.Database.EntityConfig;

internal class ZoneTemplateRecordEntityConfiguration : IEntityTypeConfiguration<ZoneTemplateRecord>
{
    public void Configure (EntityTypeBuilder<ZoneTemplateRecord> builder)
    {
        builder.ToTable ($"{Prefixes.Table}{nameof(ZoneTemplateRecord)}");

        builder.HasKey(k => k.ItemId);
        builder.HasIndex (i => i.Name);
        builder.HasIndex( i=> i.ZoneTemplateId);
        builder.HasIndex (i => new {i.ZoneTemplateId, i.IsActive });
        builder.HasIndex(i => new {i.ZoneTemplateId, i.Type, i.IsActive});

        builder.Property (p => p.ItemId)
               .IsFixedLength ()
               .HasMaxLength (36)
               .HasColumnType ("varchar")
               .IsRequired ();

        builder.Property (p => p.ZoneTemplateId)
                .IsFixedLength ()
                .HasMaxLength (36)
                .HasColumnType ("varchar")
                .IsRequired ();

        builder.Property (p => p.Name)
               .HasMaxLength (50)
               .HasColumnType ("varchar")
               .IsRequired ();

        builder.Property (p => p.Data)
               .HasMaxLength (255);

        builder.Property (p => p.Description)
               .HasMaxLength (255);

        builder.Property(p => p.Type)
               .HasMaxLength(20)
               .HasColumnType ("varchar")
               .IsRequired ();
    }
}
