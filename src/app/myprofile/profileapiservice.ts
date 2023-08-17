import { Component, Injectable, Input } from '@angular/core';
import { LoginService } from '../services/login-service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

interface Profile {
  username: string;
  email: string;
}
@Injectable({providedIn : 'root'})
export class MyProfileService {
  public token: string | null = localStorage.getItem('token');
  public name: string = 'Hello';

  private nameSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    this.name
  );
  cart: boolean = false;
  constructor(private loginService: LoginService, private http: HttpClient) {
    this.fetchAndUpdateUsername();
  }

  fetchAndUpdateUsername(){
    this.token=localStorage.getItem('token');
    this.http
    .post<Profile>('http://localhost:3360/userUpdate/username', {
      token: this.token,
    })
    .subscribe((res) => {
      this.name = res.username;
      // Notify subscribers about the updated name
      this.nameSubject.next(this.name);
    });
  }
  getNameUpdates() {
    return this.nameSubject.asObservable();
  }
}