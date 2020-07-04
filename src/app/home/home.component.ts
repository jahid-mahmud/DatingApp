import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode :boolean =false;
  values: Object;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getValues()
  }
  registerToggle() {
    this.registerMode = !this.registerMode;
  }
  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe( res => {
      this.values=res
    } , error => {
      console.log(error)
    })
  }
  cancelRegisterMethod (registerMode:boolean) {
    this.registerMode=registerMode
  }


}
