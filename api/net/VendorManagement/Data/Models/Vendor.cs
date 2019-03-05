using System;
using System.ComponentModel.DataAnnotations;
using GeoJSON.Net.Geometry;

namespace VendorManagement.Data.Models
{
    public class Vendor : BaseEntity
    {
        [Key]
        public Guid Id { get; set; }

        [Required(AllowEmptyStrings =false)]
        public string Name { get; set; }

        public Point Location { get; set; }

        public DateTime? DeletedAt { get; set; }
    }
}
