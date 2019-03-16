using VendorManagement.Data.Models;

namespace VendorManagement.Data.Repos
{
    public interface IVendorRepository : IRepository<Vendor>
    {
        void Remove(string code);
        Vendor FindByCode(string code);
    }
}
