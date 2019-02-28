using System;
using System.Collections.Generic;

namespace VendorManagement.Data
{
    public interface IRepository<T> where T : BaseEntity
    {
        T Add(T item);
        void Remove(Guid id);
        void Update(T item);
        T FindById(Guid id);
        IEnumerable<T> FindAll();
    }
}
