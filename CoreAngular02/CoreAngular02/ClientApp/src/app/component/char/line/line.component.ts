import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import *as Highcharts from 'highcharts';
@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  constructor() { }
  public search: any;
  ngOnInit(): void {
    $.ajax({
      url: "http://localhost:8001/api/Users/GetHighcharts",
      type: "get",
      success: function (data) {
        //console.log(data);
        var jsondata = JSON.parse(data);
        console.log(jsondata);
        var options1 = {
          chart: {
            type: ''
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
  searchdata() {
    $.ajax({
      url: "http://localhost:8001/api/Users/GetSearchHighcharts?name=" + this.search,
      type: "get",
      success: function (data) {
        //console.log(data);
        var jsondata = JSON.parse(data);
        //console.log(jsondata);
        var options = {
          chart: {
            type: ''
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

    console.log(this.search)

  }

}
