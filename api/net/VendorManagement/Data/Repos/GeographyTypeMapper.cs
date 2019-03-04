using System;
using System.Data;
using Dapper;
using GeoJSON.Net.Geometry;
using Npgsql;
using NpgsqlTypes;

namespace VendorManagement.Data.Repos
{
    public class GeometryTypeMapper : SqlMapper.TypeHandler<Point>
    {
        public override Point Parse(object value)
        {
            if (value is Point geometry)
            {
                return geometry;
            }

            throw new ArgumentException();
        }

        public override void SetValue(IDbDataParameter parameter, Point value)
        {
            if (parameter is NpgsqlParameter npgsqlParameter)
            {
                npgsqlParameter.NpgsqlDbType = NpgsqlDbType.Geometry;
                npgsqlParameter.Value = value;
            }
            else
            {
                throw new ArgumentException();
            }
        }
    }
}
