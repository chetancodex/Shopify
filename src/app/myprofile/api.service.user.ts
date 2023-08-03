import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({ providedIn: 'root' })
export class UserApiService {
  

  constructor(private http: HttpClient) {
   
  }

  // Expose a method to subscribe to the name updates
 
}
