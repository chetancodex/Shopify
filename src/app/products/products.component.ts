import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Interfaces/product-interface';
import { ProductApiService } from './api.service.products';
import { CartService } from '../myprofile/shopping-cart/cartapi';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  occur: boolean = false;
  productApiData: Product[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productApi: ProductApiService,
    private cartService : CartService
  ) {}

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
  onAddToCart( product : Product) {
    this.cartService.addToCart(product);
    console.log('Added to cart:', product);
  }
}
