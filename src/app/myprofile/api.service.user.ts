import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";

@Injectable({providedIn:'root'})
 

export class UserApiService implements OnInit{

constructor(private http: HttpClient){

}


ngOnInit() {
    
}
}