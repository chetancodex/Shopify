import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";

@Injectable({providedIn:'root'})
 

export class UserApiService implements OnInit{

constructor(private http: HttpClient){

}

getUserDetails() {
    this.http.get('http://localhost:3000/user')
}


ngOnInit() {
    
}
}