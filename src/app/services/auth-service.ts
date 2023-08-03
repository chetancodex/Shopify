import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login-service";
@Injectable({providedIn:'root'})

export class AuthGuard implements CanActivate{


    constructor(private loginService: LoginService , private router: Router){}
      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean | UrlTree>  {
        const token = localStorage.getItem('token');
        if(token) {
          console.log('token')
          return true
        } else {
          console.log('token is not available ')
          this.router.navigate(['login']);
          return false
        }
      }
}