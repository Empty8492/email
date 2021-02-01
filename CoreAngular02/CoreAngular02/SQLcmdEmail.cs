using CoreAngular02.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace CoreAngular02
{
    public class SQLcmdEmail
    {
        public static List<Email> SQLcmdData()
        {
            string sql = "Data Source = DESKTOP-F7VMHLU\\EMPTY;Initial Catalog = EmailData;User Id = sa;Password = lenxin;";
            string querystring = "select * from tb_Email";
            List<Email> mList = new List<Email>();
            using (SqlConnection conn = new SqlConnection(sql))
            {
                SqlCommand cmd = new SqlCommand(querystring, conn);
                conn.Open();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Email u = new Email();
                        u.EID = (int)reader[0];
                        u.EmailName = reader[1].ToString();
                        mList.Add(u);
                    }
                }
            }
            return mList;
        }
    }
}
