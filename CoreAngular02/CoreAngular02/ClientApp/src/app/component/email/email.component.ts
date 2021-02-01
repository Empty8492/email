import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor() { }
  public list: any[] = [];
  ngOnInit() {
    let _this = this;
    $.ajax({
      url: "api/E",
      type: "get",
      success: function (data) {
        var jsondata = JSON.parse(data);
        _this.list = jsondata;
        console.log(_this.list)
      }
    })
  }

}
