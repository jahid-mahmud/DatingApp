import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AleartifyService } from '../_services/aleartify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output () cancelRegistration = new EventEmitter()
  model:any ={}
  constructor(private authService:AuthService,private alertify:AleartifyService) { }

  ngOnInit() {
  }
  register() {
    this.authService.register(this.model).subscribe ( response => {
      this.alertify.success("registration succesfull")
    },error => {
     this.alertify.error(error)
    })

  }
  cancel() {
    this.cancelRegistration.emit(false)
  }

}
