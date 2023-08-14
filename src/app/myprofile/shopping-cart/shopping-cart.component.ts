import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from 'src/app/Interfaces/product-interface';
interface Cart {
  userId : string ,
  products  : Product[]
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  Products: Product[] = []; // Initialize an empty array
  
  constructor(private http: HttpClient) {
    this.http.get<Cart>('http://localhost:3360/cart').subscribe((res) => {
      this.Products = res.products; // Assign fetched products to the Products array
    });
  }
}
