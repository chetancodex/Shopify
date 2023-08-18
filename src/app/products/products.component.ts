import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Interfaces/product-interface';
import { ProductApiService } from './api.service.products';
import { HttpClient } from '@angular/common/http';
import { MyProfileService } from '../myprofile/profileapiservice';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  occur: boolean = false;
  productApiData: Product[] = [];
  username !: string

  constructor(
    private http : HttpClient,
    private route: ActivatedRoute,
    private productApi: ProductApiService,
    private MyProfileService : MyProfileService
  ) { this.username = this.MyProfileService.name}

  ngOnInit() {
    this.route.snapshot.url.some((e) => {
      if (e.path === 'products') {
        this.occur = true;
      }
    });

    this.productApi.getProducts().subscribe((res) => {
      this.productApiData = res;
      console.log(res)
    });
  }
  onAddToCart(product :Product):Observable<any> {
    console.log('item added to cart');
     return this.http.post<any>('http://localhost:3360/cart/create',{username : this.username,productId : product.id , quantity : 1});
  }

  onAddToCartCall(product:Product){
    this.onAddToCart(product).subscribe((res) => {

      console.log(res)
    });
  }
  clearname() {
    this.username = ""
  }
}
