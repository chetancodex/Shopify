import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface Profile {
  username: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class UserApiService {
  public token: string | null = localStorage.getItem('token');
  public name: string = "Hello";

  // Use BehaviorSubject to provide updates for the name property
  private nameSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.name);

  constructor(private http: HttpClient) {
    this.http.post<Profile>('http://localhost:3000/userUpdate/username', { token: this.token }).subscribe((res) => {
      this.name = res.username;
      // Notify subscribers about the updated name
      this.nameSubject.next(this.name);
    });
  }

  // Expose a method to subscribe to the name updates
  getNameUpdates() {
    return this.nameSubject.asObservable();
  }
}
