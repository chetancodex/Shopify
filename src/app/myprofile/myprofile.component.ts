import { Component, Input } from "@angular/core";
import { LoginService } from "../services/login-service";
import { HttpClient } from "@angular/common/http";

@Component({
    selector : 'app-myprofile',
    templateUrl: './myprofile.component.html',
    styleUrls: ['./myprofile.component.css']
})
export class MyProfileComponent {
    
cart : boolean = false
constructor(private loginService: LoginService,private http : HttpClient){



   
}

}
