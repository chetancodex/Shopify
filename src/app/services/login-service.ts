import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class LoginService {
  private afterLogin = new Subject<boolean>();


  constructor(private http: HttpClient, private router: Router) {}
  getLogin() {
    return this.afterLogin.asObservable();
  }
  getLoginSubject() {
    return this.afterLogin;
  }
  onLogout() {
    this.router.navigate(['login']);
    localStorage.removeItem('token');
  }
}
