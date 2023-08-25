import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Interfaces/product-interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getAllProducts } from './state/action';
import * as productActions from './state/action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  occur: boolean = false;
  products!: any;
  products$!: Observable<Product[]>; // For Ngrx Store

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ products: Product[] }>
  ) {
    this.products$ = this.store.select('products');
  }

  ngOnInit() {
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

  onAddToCart(product: Product): void {
    this.store.dispatch(productActions.addToCart({ product }));
  }
 
}
