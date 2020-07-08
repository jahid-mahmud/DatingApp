import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AleartifyService } from '../_services/aleartify.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService , private router: Router, private aleartify: AleartifyService) {}
  canActivate(): boolean  {
    if (this.authService.loggedIn()) {
      return true;
    }
    this.aleartify.error('unauthorised');
    this.router.navigate(['']);
    return false;
  }
}
