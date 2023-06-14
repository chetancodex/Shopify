import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductStorageService } from '../Storage/products-storage';
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
  productApiData:Product[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productData: ProductStorageService,
    private productApi: ProductApiService
  ) {
    this.productApi.getproducts().subscribe((res) => {
      this.productApiData = res.products

    });
    // this.productApiData = data;
    // const data: Product[] = JSON.parse(res.products)
  }
  ngOnInit() {
    // this.productApi.getproducts().subscribe(res: any => {
    //   this.productApiData = res.products
  
    this.route.snapshot.url.some((e) => {
      if (e.path === 'products') {
        this.occur = true;
      }
    });
  }
}
