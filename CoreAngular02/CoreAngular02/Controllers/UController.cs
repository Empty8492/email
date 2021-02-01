using CoreAngular02.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoreAngular02.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            Users users1 = new Users();
            List<highchartsmodel> highchartsmodels = new List<highchartsmodel>();

            highchartsmodel highchartsmodel = new highchartsmodel();
            List<Users> users = SQLcmd.SQLcmdData();

            //foreach (var item in users)
            //{
            //    highchartsmodel highchartsmodel1 = new highchartsmodel()
            //    {
            //        data = new List<int>()
            //    };
            //    highchartsmodel1.name = item.Name.ToString();
            //    highchartsmodel1.data.Add(item.January);
            //    highchartsmodel1.data.Add(item.February);
            //    highchartsmodel1.data.Add(item.March);
            //    highchartsmodels.Add(highchartsmodel1);
            //}

            String hingeString = Newtonsoft.Json.JsonConvert.SerializeObject(users);
            return hingeString;
        }
        [HttpGet("GetHighcharts")]
        public string GetHighcharts()
        {
            Users users1 = new Users();
            List<highchartsmodel> highchartsmodels = new List<highchartsmodel>();
            List<Users> users = SQLcmd.SQLcmdData();

            foreach (var item in users)
            {
                highchartsmodel highchartsmodel1 = new highchartsmodel()
                {
                    data = new List<int>()
                };
                highchartsmodel1.name = item.Name.ToString();
                highchartsmodel1.data.Add(item.January);
                highchartsmodel1.data.Add(item.February);
                highchartsmodel1.data.Add(item.March);
                highchartsmodels.Add(highchartsmodel1);
            }

            String hingeString = Newtonsoft.Json.JsonConvert.SerializeObject(highchartsmodels);
            return hingeString;
        }
        [HttpGet("Getvuetree")]
        public string Getvuetree()
        {
            List<vuetree> vuetree = new List<vuetree>();
            List<Users> users = SQLcmd.SQLcmdData();

            foreach (var item in users)
            {
                vuetree vuetree01 = new vuetree();


                vuetree01.label = item.Name.ToString();


                vuetree.Add(vuetree01);
            }
            vuetreedata vuetreedatas = new vuetreedata();
            vuetreedatas.lable = "国家";
            vuetreedatas.children = vuetree;


            String hingeString = Newtonsoft.Json.JsonConvert.SerializeObject(vuetreedatas);
            return hingeString;
        }
        [HttpGet("GetPieHighcharts")]
        public string GetPieHighcharts()
        {
            List<highchartsPiemodel> highchartsmodels = new List<highchartsPiemodel>();
            List<Users> users = SQLcmd.SQLcmdData();

            foreach (var item in users)
            {
                highchartsPiemodel highchartsmodel1 = new highchartsPiemodel();
                highchartsmodel1.name = item.Name.ToString();
                int a = item.January + item.February + item.March;
                highchartsmodel1.y = a;
                highchartsmodels.Add(highchartsmodel1);
            }
            highchartsPiemodel01 highchartsPiemodel01 = new highchartsPiemodel01();
            highchartsPiemodel01.name = "brands";
            highchartsPiemodel01.data = highchartsmodels;

            String hingeString = Newtonsoft.Json.JsonConvert.SerializeObject(highchartsPiemodel01);
            return hingeString;
        }
        [HttpGet("GetMonthDatagetByCountryId")]
        /// <summary>
        /// 根据国家ID查询数据
        /// </summary>
        /// <param name="id">国家ID</param>
        /// <returns>国家所有月份的值</returns>
        public string GetMonthDatagetByCountryId(int id)
        {
            List<Users> users = SQLcmd.SQLcmdData(id);
            String hingeString = Newtonsoft.Json.JsonConvert.SerializeObject(users);
            return hingeString;
        }
        [HttpGet("GetSearch")]
        /// <summary>
        /// 根据国家Name查询数据
        /// </summary>
        /// <param name="name">国家Name</param>
        /// <returns>国家所有月份的值</returns>
        public string GetSearch(string name)
        {
            List<Users> users = SQLcmd.SQLcmdSearch(name);
            String hingeString = Newtonsoft.Json.JsonConvert.SerializeObject(users);
            return hingeString;
        }
        [HttpGet("GetSearchHighcharts")]
        public string GetSearchHighcharts(string name)
        {
            Users users1 = new Users();
            List<highchartsmodel> highchartsmodels = new List<highchartsmodel>();
            List<Users> users = SQLcmd.SQLcmdSearch(name);

            foreach (var item in users)
            {
                highchartsmodel highchartsmodel1 = new highchartsmodel()
                {
                    data = new List<int>()
                };
                highchartsmodel1.name = item.Name.ToString();
                highchartsmodel1.data.Add(item.January);
                highchartsmodel1.data.Add(item.February);
                highchartsmodel1.data.Add(item.March);
                highchartsmodels.Add(highchartsmodel1);
            }

            String hingeString = Newtonsoft.Json.JsonConvert.SerializeObject(highchartsmodels);
            return hingeString;
        }
        [HttpGet("GetSearchPieHighcharts")]
        public string GetSearchPieHighcharts(string name)
        {
            Users users1 = new Users();
            List<highchartsPiemodel> highchartsmodels = new List<highchartsPiemodel>();
            List<Users> users = SQLcmd.SQLcmdSearch(name);

            foreach (var item in users)
            {
                highchartsPiemodel highchartsmodel1 = new highchartsPiemodel();
                highchartsmodel1.name = item.Name.ToString();
                int a = item.January + item.February + item.March;
                highchartsmodel1.y = a;
                highchartsmodels.Add(highchartsmodel1);
            }
            highchartsPiemodel01 highchartsPiemodel01 = new highchartsPiemodel01();
            highchartsPiemodel01.name = "brands";
            highchartsPiemodel01.data = highchartsmodels;
            String hingeString = Newtonsoft.Json.JsonConvert.SerializeObject(highchartsPiemodel01);
            return hingeString;
        }

        [HttpPost]
        public int Post()
        {
            int January = int.Parse(Request.Form["January"].ToString());
            int February = int.Parse(Request.Form["February"].ToString());
            int March = int.Parse(Request.Form["March"].ToString());
            string Name = Request.Form["Name"].ToString();
            return SQLcmd.SQLinsertData(January, February, March, Name);
        }
        [HttpPut]
        public int Put()
        {
            int XJanuary = int.Parse(Request.Form["January"].ToString());
            int XFebruary = int.Parse(Request.Form["February"].ToString());
            int XMarch = int.Parse(Request.Form["March"].ToString());
            int ID = int.Parse(Request.Form["Id"]);
            return SQLcmd.SQLUpdateData(XJanuary, XFebruary, XMarch, ID);
        }
        [HttpDelete]
        public int Delete()
        {
            int ID = int.Parse(Request.Form["Id"]);
            return SQLcmd.SQLDeleteData(ID);
        }
    }
}
