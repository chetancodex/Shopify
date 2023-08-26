import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/Interfaces/product-interface';
import { CartService } from './api.service.cart';
import { Store } from '@ngrx/store';
import { loadCart } from './state/action';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements  OnDestroy{
  cartProducts:any;
  cartProducts$ !: Observable<Product[]>
  cartSubscription !: Subscription 

  constructor(private http: HttpClient, private cartService: CartService , private store : Store<{cart : Product[] }>) {
    this.cartService.fetchCartItems();
    this.store.dispatch(loadCart());
    this.cartProducts$ =  this.store.select('cart');
   this.cartSubscription =  this.cartProducts$.subscribe((res)=> {
      this.cartProducts = res
    })
    
    
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }
  




  deleteProduct(product :Product) {
   const data = {
    // username : this.cartService.username,
    productId : product.id
   }
   this.http.post('http://localhost:3360/cart/delete',data).subscribe((res) => {
    console.log({message : "Product deleted Success"});
    this.cartService.refreshCartItems()
   })
  };
  
}
