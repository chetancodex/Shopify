import { Component, OnInit } from '@angular/core';
import { Product } from '../Interfaces/product-interface';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../myprofile/shopping-cart/cart.api.service';
import { MyProfileService } from '../myprofile/profile.api.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  token  = localStorage.getItem('token');
  username !: string |  null
  id!: string | null;
  image!: string;
  name!: string;
  rating!: number;
  color!: string;
  description!: string;
  brand!:string
  model!: string;
  price !: number
  
  constructor(private http: HttpClient, private route: ActivatedRoute , private profileService : MyProfileService) { 
    const user =  this.profileService.decodeJwt(this.token);
    this.username = user.username 
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
   return  this.http.get<Product>(`http://localhost:3360/products/${id}`).subscribe(
      res => {
        console.log(res)
        this.image = res.image  ;
        this.name = res.name;
        this.rating = res.rating;
        this.description = res.description;
        this.brand = res.brand;
        this.color = res.color;
        this.model = res.modelName;
        this.price = res.price;

      },
      error => {
        // Handle the error, e.g., show an error message or redirect to an error page.
        console.error('Error fetching product:', error);
      }
    );
  }


 

}


// http://localhost:3000/products/${id} For MongoDB
// When Use MongoDB TypeCast request {product : Product} and add res.product on each field
// http://localhost:3360/products/${id} For Mysql