import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn : 'root'})
export class OrderService {
constructor( private http : HttpClient) {

}
fetchOrderItems() {
   return  this.http.get<any[]>('http://localhost:3360/order/')
}
}