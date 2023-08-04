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
  productApiData: Product[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productApi: ProductApiService
  ) {}

  ngOnInit() {
    this.route.snapshot.url.some((e) => {
      if (e.path === 'products') {
        this.occur = true;
      }
    });

    this.productApi.getproducts().subscribe((res) => {
      this.productApiData = res.products;
    });
  }

  // Remove this method since we are using routerLink to navigate to the single product page
  // getProductDetails(id: string) {
  //   console.log(id);
  //   this.router.navigate(['/products', id]);
  // }
}
