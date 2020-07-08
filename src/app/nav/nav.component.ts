import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient } from '@angular/common/http';
import { AleartifyService } from '../_services/aleartify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  values: any;

  constructor(public authService: AuthService, private alertify: AleartifyService, private router: Router) { }

  ngOnInit() {
  }
  login() {
   this.authService.login(this.model).subscribe( response => {
     this.alertify.success('logged in successfull');
     this.router.navigate(['/members']);
   }, error => {
     this.alertify.error(error);
   })
  }

  isLoggedin() {
    return this.authService.loggedIn();
  }
  logout( ) {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
    this.alertify.message('logged out');
  }
  editProfile( ) {
    
  }

}
