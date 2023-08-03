import { Component, Input } from "@angular/core";
import { LoginService } from "../services/login-service";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";


interface Profile {
  username: string;
  email: string;
}
@Component({
    selector : 'app-myprofile',
    templateUrl: './myprofile.component.html',
    styleUrls: ['./myprofile.component.css']
})
export class MyProfileComponent {
  public token: string | null = localStorage.getItem('token');
  public name: string = "Hello";

  // Use BehaviorSubject to provide updates for the name property
  private nameSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.name);

    
cart : boolean = false
constructor(private loginService: LoginService,private http : HttpClient){
  this.http.post<Profile>('http://localhost:3000/userUpdate/username', { token: this.token }).subscribe((res) => {
    this.name = res.username;
    // Notify subscribers about the updated name
    this.nameSubject.next(this.name);
  });
   
}
getNameUpdates() {
  return this.nameSubject.asObservable();
}

}
