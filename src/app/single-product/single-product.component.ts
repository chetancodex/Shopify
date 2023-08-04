import { Component, OnInit } from '@angular/core';
import { Product } from '../Interfaces/product-interface';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  id!: string | null;
  image!: string;
  name!: string;
  rating!: number;
  color!: string;
  description!: string;
  brand!:string
  model!: string

  constructor(private http: HttpClient, private route: ActivatedRoute) { 
  
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      console.log(productId)
      this.id = productId;
      if (this.id) {
        this.fetchProductDetails(this.id);
      } else {
        // Handle the case when 'id' parameter is not available or invalid
        console.error('Invalid product ID');
      }
    });
  }

  fetchProductDetails(id: string) {
    console.log(id)
   return  this.http.get<{product : Product}>(`http://localhost:3000/products/${id}`).subscribe(
      res => {
        console.log(res)
        this.image = res.product.image  ;
        this.name = res.product.name;
        this.rating = res.product.rating;
        this.description = res.product.description;
        this.brand = res.product.brand;
        this.color = res.product.color;
        this.model = res.product.modelName

      },
      error => {
        // Handle the error, e.g., show an error message or redirect to an error page.
        console.error('Error fetching product:', error);
      }
    );
  }
}
