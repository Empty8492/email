import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import *as Highcharts from 'highcharts';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  public search: any;
  constructor() { }

  ngOnInit(): void {

    $.ajax({
      url: "http://localhost:8001/api/Users/GetpieHighcharts",
      type: "get",
      success: function (data) {
        //console.log(data);
        var jsondata = JSON.parse(data);
        var dataArray = new Array();
        dataArray.push(jsondata);
        console.log(jsondata);
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

  }
  searchdata() {
    var _this = this
    $.ajax({
      url: "http://localhost:8001/api/Users/GetSearchPieHighcharts?name=" + _this.search,
      type: "get",
      success: function (data) {
        //console.log(data);
        var jsondata = JSON.parse(data);
        var dataArray = new Array();
        dataArray.push(jsondata);
        console.log(dataArray);
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

}



