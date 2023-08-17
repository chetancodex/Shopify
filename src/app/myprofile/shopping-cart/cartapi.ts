import { Injectable, OnInit } from '@angular/core';
import { Product } from '../../Interfaces/product-interface';
import { HttpClient } from '@angular/common/http';
import { MyProfileService } from '../profileapiservice';


@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  username !:string
 

  cartItems: Product[] = [];
  cartDetails: any[] = [];

  constructor(private http: HttpClient, private profile: MyProfileService) {
   
     this.profile.getNameUpdates().subscribe((name)=> {
      console.log(name)
      this.username = name
     });
     setTimeout(() => {
      this.fetchCartItems();
    }, 5000);
     
  }

  private fetchCartItems(): void {
    console.log(this.username);
    this.http.post<any>('http://localhost:3360/cart/getcart', { username: this.username })
      .subscribe((data) => {
        data.forEach((element: any)  => {
          this.cartDetails.push(element)
        });
        this.cartDetails.forEach(cartDetail => {
          this.fetchProductDetails(cartDetail.productId);
        });

     
      });
  }

  private fetchProductDetails(productId: number): void {
    console.log(productId)
    this.http.get<Product>(`http://localhost:3360/products/${productId}`)
      .subscribe((product) => {
        this.cartItems.push(product);
      });
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }
  ngOnInit() {
   
  }
}
