import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from 'src/app/Interfaces/product-interface';

interface cart {
  userId : string,
  products : Product []
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  Products !: Product[] ; 
constructor( private http : HttpClient) {
  this.http.get<cart>('http://localhost:3000/cart').subscribe((res)=> {
    this.Products = res.products
  })
}



}
