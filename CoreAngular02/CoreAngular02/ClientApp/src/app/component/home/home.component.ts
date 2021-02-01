import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import *as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent02 implements OnInit {

  constructor() { }
  public all1: boolean = true;
  public Name: any;
  public January: any;
  public February: any;
  public March: any;
  public list: any[] = [];
  public all: boolean = false;
  public search: any;
  ngOnInit(): void {
    let _this = this;
    $.ajax({
      url: "http://localhost:8001/api/Users",
      type: "get",
      success: function (data) {
        var jsondata = JSON.parse(data);
        // debugger;
        _this.list = jsondata;
      }
    })
    $.ajax({
      url: "http://localhost:8001/api/Users/GetpieHighcharts",
      type: "get",
      success: function (data) {
        //console.log(data);
        var jsondata = JSON.parse(data);
        var dataArray = new Array();
        dataArray.push(jsondata);
   
        var options1 = {
          chart: {
            type: 'pie'
          },
          title: {
            text: ''
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          series: dataArray
        };
        var chart1 = Highcharts.chart('container2', options1);
      }
    });
    $.ajax({
      url: "http://localhost:8001/api/Users/GetHighcharts",
      type: "get",
      success: function (data) {
        //console.log(data);
        var jsondata = JSON.parse(data);
        var options1 = {
          chart: {
            type: 'column'
          },
          title: {
            text: ''
          },
          xAxis: {
            categories: ['一月', '二月', '三月'],
            crosshair: true
          },
          yAxis: {
            title: {
              text: '-------------'
            }
          },
          tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:10">{series.name}: </td>' +
              '<td style="padding:10"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
          },
          series: jsondata
        };
        var chart1 = Highcharts.chart('container1', options1);
      }
    });
  }
  insertdata() {
    if (this.Name == undefined || this.January == undefined || this.February == undefined || this.March == undefined) {
      this.all1 = true;
    }
    else {
      this.all1 = false;
    }
  }
  Insert() {
    var param = { "Name": this.Name, "January": parseInt(this.January, 10), "February": parseInt(this.February, 10), "March": parseInt(this.March, 10) };
    $.ajax({
      url: "http://localhost:8001/api/Users",
      type: "post",
      data: param,
      success: function (data) {
        alert("成功添加数据");
        window.location.reload();
      }
    })


  }
  Del(id: any) {
    var param = { "Id": id };
    $.ajax({
      url: "http://localhost:8001/api/Users",
      type: "Delete",
      data: param,
      success: function (data) {
        alert("成功删除数据");
        window.location.reload();
      }
    })
  }
  UpdateHide(id: any) {
    $(".span-" + id).hide();
    $(".but-" + id).hide();
    $(".button-" + id).show();
    $("#Name-" + id).show();
    $("#January-" + id).show();
    $("#February-" + id).show();
    $("#March-" + id).show();
    $.ajax({
      url: "http://localhost:8001/api/Users/GetMonthDatagetByCountryId?id=" + id,
      type: "get",
      success: function (data) {
        var jsondata = JSON.parse(data);
        $("#January-" + id).val(jsondata[0].January);
        $("#February-" + id).val(jsondata[0].February);
        $("#March-" + id).val(jsondata[0].March);
      }
    })
    this.all = true;
  }

  Update(id: any) {
    var january: number = <number>$("#January-" + id).val();
    var february: number = <number>$("#February-" + id).val();
    var march: number = <number>$("#March-" + id).val();
    var param: any = { "Id": id, "January": january, "February": february, "March": march };

    $.ajax({
      url: "http://localhost:8001/api/Users",
      type: "Put",
      data: param,
      success: function (data) {
        alert("成功修改数据");
        window.location.reload();
      }
    })

  }
  UpdateCancel(id: any) {
    $(".span-" + id).show();
    $(".but-" + id).show();
    $(".button-" + id).hide();
    $("#Name-" + id).hide();
    $("#January-" + id).hide();
    $("#February-" + id).hide();
    $("#March-" + id).hide();
    this.all = false;
  }
  searchdata() {
    let _this = this;
    $.ajax({
      url: "http://localhost:8001/api/Users/GetSearch?name=" + this.search,
      type: "get",
      success: function (data) {
        var jsondata = JSON.parse(data);
        _this.list = jsondata;
        $.ajax({
          url: "http://localhost:8001/api/Users/GetSearchHighcharts?name=" + _this.search,
          type: "get",
          success: function (data) {
            //console.log(data);
            var jsondata = JSON.parse(data);
            //console.log(jsondata);
            var options = {
              chart: {
                type: 'column'
              },
              title: {
                text: ''
              },
              xAxis: {
                categories: ['一月', '二月', '三月'],
                crosshair: true
              },
              yAxis: {
                title: {
                  text: '-------------'
                }
              },
              tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:10">{series.name}: </td>' +
                  '<td style="padding:10"><b>{point.y:.1f} </b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
              },
              series: jsondata
            };
            var chart = Highcharts.chart('container1', options);
          }
        })

        $.ajax({
          url: "http://localhost:8001/api/Users/GetSearchPieHighcharts?name=" + _this.search,
          type: "get",
          success: function (data) {
            //console.log(data);
            var jsondata = JSON.parse(data);
            var dataArray = new Array();
            dataArray.push(jsondata);

            //console.log(jsondata);
            var options2 = {
              chart: {
                type: 'pie'
              },
              title: {
                text: ''
              },
              tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
              },
              series: dataArray
            };
            var chart = Highcharts.chart('container2', options2);
          }
        })

      }
    })


  }
}



