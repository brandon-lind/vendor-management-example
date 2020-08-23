using System;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using GeoJSON.Net.Geometry;

namespace VendorManagement.Data.Models
{
    public class Vendor : BaseEntity
    {
        [Key]
        [IgnoreDataMember]
        public Guid Id { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "The vendor code is required")]
        [StringLength(maximumLength: 6, MinimumLength = 6, ErrorMessage = "The vendor code must be exactly 6 characters")]
        public string Code { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "The vendor name is required")]
        public string Name { get; set; }

        public Point Location { get; set; }

        public DateTime? DeletedAt { get; set; }
    }
}
