using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;
using VendorManagement.Data.Models;

namespace VendorManagement.Data.Repos
{
    public class VendorRepo : IRepository<Vendor>
    {
        private readonly string connString;

        public VendorRepo(IConfiguration configuration)
        {
            connString = configuration.GetValue<string>("Database:VendorManagement:ConnectionString");
        }

        internal IDbConnection DBConnection 
        {
            get { return new NpgsqlConnection(connString); }
        }

        public Vendor Add(Vendor item)
        {
            var result = new Vendor
            {
                Id = Guid.NewGuid(),
                Location = item.Location,
                Name = item.Name
            };

            using (IDbConnection conn = DBConnection)
            {
                conn.Open();
                conn.Execute("INSERT INTO vendors (id, name, location) VALUES (@Id, @Name, @Location);", result);
            }

            return result;
        }

        public IEnumerable<Vendor> FindAll()
        {
            using (IDbConnection conn = DBConnection)
            {
                conn.Open();
                return conn.Query<Vendor>("SELECT * FROM vendors WHERE deletedAt IS NULL;");
            }
        }

        public Vendor FindById(Guid id)
        {
            using (IDbConnection conn = DBConnection)
            {
                conn.Open();
                return conn.Query<Vendor>("SELECT * FROM vendors WHERE id=@id AND deletedAt IS NULL;", new { id }).FirstOrDefault();
            }
        }

        public void Remove(Guid id)
        {
            using (IDbConnection conn = DBConnection)
            {
                conn.Open();
                conn.Execute("UPDATE vendors SET deletedAt=@timestamp WHERE id=@id;", new { id, timestamp = DateTime.UtcNow });
            }
        }

        public void Update(Vendor item)
        {
            using (IDbConnection conn = DBConnection)
            {
                conn.Open();
                conn.Execute("UPDATE vendors SET name=@Name, location=@Location WHERE id=@id AND deletedAt IS NULL;", item);
            }
        }
    }
}
