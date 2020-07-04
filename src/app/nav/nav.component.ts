import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient } from '@angular/common/http';
import { AleartifyService } from '../_services/aleartify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model : any ={}
  values: Object;

  constructor(public authService:AuthService,private alertify:AleartifyService) { }

  ngOnInit() {
  }
  login() {
   this.authService.login(this.model).subscribe( response => {
     console.log('logged in successfull')
     this.alertify.success("logged in successfull")
   },error => {
     this.alertify.error(error)
   })
  }

  isLoggedin() {
    return this.authService.loggedIn()
  }
  logout( ) {
    localStorage.removeItem('token')
    console.log('logged out')
    this.alertify.message("logged out")
  }
  editProfile( ) {
    
  }

}
