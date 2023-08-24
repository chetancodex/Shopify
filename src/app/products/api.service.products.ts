import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductApiService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    console.log('1')
    return this.http.get<any[]>('http://localhost:3360/products');
  }
}

// http://localhost:3360/products For Mysql;
// http://localhost:3000/products For MongoDb;
// When MongoDb use this Typecast is required <{count:number, products:any}> 
