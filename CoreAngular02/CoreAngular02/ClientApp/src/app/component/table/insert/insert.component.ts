import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor() { }
  public all1: boolean = true;
  public Name: any;
  public January: any;
  public February: any;
  public March: any;
  Form: FormGroup;
  data = {
    name: "",
    january: "",
    february: "",
    march: ""
  }
  ngOnInit(): void {

    this.Form = new FormGroup({
      'name': new FormControl(this.data.name, [
        Validators.required
      ]),
      'january': new FormControl(this.data.january, Validators.required),
      'february': new FormControl(this.data.february, Validators.required),
      'march': new FormControl(this.data.march, Validators.required),
    });
  }

  get name() { return this.Form.get('name'); }
  get january() { return this.Form.get('january'); }
  get february() { return this.Form.get('february'); }
  get march() { return this.Form.get('march'); }


  
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
}
