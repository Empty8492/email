import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }
  public CID: any = 0;
  public list: any[];
  ngOnInit() {
    this.route.params.subscribe((data) => {
      console.log(data.id);
      let _this = this;
      $.ajax({
        url: "http://localhost:8001/api/Users/GetMonthDatagetByCountryId?id=" + data.id,
        type: "get",
        success: function (data) {
          var jsondata = JSON.parse(data);
          console.log(jsondata);
          _this.list = jsondata;
          _this.CID = jsondata[0].ID;
          $("#Name").val(jsondata[0].Name);
          $("#January" ).val(jsondata[0].January);
          $("#February").val(jsondata[0].February);
          $("#March").val(jsondata[0].March);
        }
      })
    })
  }
  Update() {
    var january: number = <number>$("#January").val();
    var february: number = <number>$("#February").val();
    var march: number = <number>$("#March").val();
    var param: any = { "Id": this.CID, "January": january, "February": february, "March": march };
    console.log(param);
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

}
