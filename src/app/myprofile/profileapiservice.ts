import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

interface Profile {
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {
  private token: string | null = localStorage.getItem('token');
  private latestUsernameSubject = new BehaviorSubject<string | null>(null);

  public username$ = this.latestUsernameSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchAndUpdateUsername();
  }

  public fetchAndUpdateUsername() {
    if (!this.token) {
      return;
    }

    this.http
      .post<Profile>('http://localhost:3360/userUpdate/username', {
        token: this.token,
      })
      .subscribe(
        (res) => {
          const username = res.username;
          this.latestUsernameSubject.next(username);
        },
        (error) => {
          console.error('Error fetching username:', error);
        }
      );
  }
}
