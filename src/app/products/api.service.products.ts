import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Interfaces/product-interface';

@Injectable({ providedIn: 'root' })
export class ProductApiService {
  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3360/products');
  }
  AddtoCart(product: Product): Observable<any> {
    const data = {
      productId : product.id
    }
    return this.http.post<any>('http://localhost:3360/cart/create', data );
  }
}

// http://localhost:3360/products For Mysql;
// http://localhost:3000/products For MongoDb;
// When MongoDb use this Typecast is required <{count:number, products:any}>
