import { Component } from "@angular/core";
import { LoginService } from "../services/login-service";

@Component({
    selector : 'app-myprofile',
    templateUrl: './myprofile.component.html',
    styleUrls: ['./myprofile.component.css']
})
export class MyProfileComponent {
cart : boolean = false
constructor(private loginService: LoginService,){}


   
}


