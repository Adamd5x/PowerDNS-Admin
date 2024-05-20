using System.ComponentModel.DataAnnotations;

namespace hiDNService.API.Model
{
    public enum RecordType
    {
        [Display(Description = "Host Addess")]
        A,
        [Display(Description = "Host Address")]
        AAAA,
        [Display(Description = "AFS Database")]
        AFSDB,
        [Display(Description = "AAAA")]
        ALIAS,
        CAA,
        CERT,
        [Display(Description = "AAAA")]
        CNAME,
        [Display(Description = "Alias Record")]
        DNAME,
        [Display(Description = "Delegation Signer")]
        DS,
        HTTPS,
        LOC,
        [Display(Description = "Mailbox Information")]
        MINFO,
        [Display(Description = "Mail Exchanger")]
        MX,
        [Display(Description = "Naming Authority Pointer")]
        NAPTR,
        [Display(Description = "Namespace")]
        NS,
        [Display(Description = "Pointer")]
        PTR,
        [Display(Description = "Responsible Person")]
        RP,
        SOA,
        [Display(Description = "Service Location")]
        SRV,
        TLSA,
        [Display(Description = "Text")]
        TXT
    }
}
