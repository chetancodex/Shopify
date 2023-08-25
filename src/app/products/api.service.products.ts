import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Interfaces/product-interface';
import { MyProfileService } from '../myprofile/profileapiservice';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class ProductApiService {
  username!: string | null;
  constructor(private http: HttpClient, private myprofile: MyProfileService) {
    this.myprofile.username$.subscribe((res) => {
      this.username = res;
    });
    console.log(this.username)
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3360/products');
  }
  AddtoCart(product: Product): Observable<any> {
    return this.http.post<any>('http://localhost:3360/cart/create', {
      username: this.username,
      productId: product.id,
      quantity: 1,
    });
  }
}

// http://localhost:3360/products For Mysql;
// http://localhost:3000/products For MongoDb;
// When MongoDb use this Typecast is required <{count:number, products:any}>
