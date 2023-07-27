import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Interfaces/product-interface';
import { ProductApiService } from './api.service.products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  occur: boolean = false;
  products: Product[] = [];
  collapsing = true;
  productApiData: Product[] = [];
  product!: Product;
  id!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productApi: ProductApiService
  ) {
    this.productApi.getproducts().subscribe((res) => {
      this.productApiData = res.products;
    });
  }
  ngOnInit() {
    this.route.snapshot.url.some((e) => {
      if (e.path === 'products') {
        this.occur = true;
      }
    });
  }
}
