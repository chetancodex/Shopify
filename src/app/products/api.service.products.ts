import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductApiService {
  constructor(private http: HttpClient) {}

  getproducts():Observable<{count:number, products:any}> {
    let respons = this.http.get<{count:number, products:any}>('http://localhost:3000/products');
    console.log(respons);
    return respons
  }
}
