import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  constructor() { }
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
  }
  Del(id: any) {
    var param = { "Id": id };
    $.ajax({
      url: "/api/U",
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
      url: "/api/U",
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
      }
    })
  }
}
