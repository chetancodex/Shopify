import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Interfaces/product-interface';
import { ProductApiService } from './api.service.products';
import { HttpClient } from '@angular/common/http';
import { MyProfileService } from '../myprofile/profileapiservice';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { getAllProducts } from './state/action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  occur: boolean = false;
  products!: any;
  products$!: Observable<Product[]>; // For Ngrx Store
  username!: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private productApi: ProductApiService,
    private MyProfileService: MyProfileService,
    private store: Store<{ products: Product[] }>
  ) {
    (this.username = this.MyProfileService.name),
      (this.products$ = this.store.select('products'));
  }

  ngOnInit() {
    console.log('2')
    this.store.dispatch(getAllProducts());
    this.products$.subscribe((res) => {
      this.products = res; // Assign the products directly
    });
    this.route.snapshot.url.some((e) => {
      if (e.path === 'products') {
        this.occur = true;
      }
    });
  }
  onAddToCart(product: Product): Observable<any> {
    return this.http.post<any>('http://localhost:3360/cart/create', {
      username: this.username,
      productId: product.id,
      quantity: 1,
    });
  }

  onAddToCartCall(product: Product) {
    this.onAddToCart(product).subscribe((res) => {
      console.log(res);
    });
  }
  clearname() {
    this.username = '';
  }
}
