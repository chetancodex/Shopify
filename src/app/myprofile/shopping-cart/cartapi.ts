import { Injectable } from '@angular/core';
import { Product } from '../../Interfaces/product-interface';
import { HttpClient } from '@angular/common/http';
import { MyProfileService } from '../profileapiservice';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public username: string = '';
  private cartItemsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  public cartItems = this.cartItemsSubject.asObservable();

  constructor(private http: HttpClient, private profile: MyProfileService) {
    this.profile.getNameUpdates().subscribe((name) => {
      this.username = name;
      this.fetchCartItems();
    
    });
  }

  public fetchCartItems(): void {
    if (this.username) {
      this.http
        .post<any>('http://localhost:3360/cart/getcart', { username: this.username })
        .subscribe((data) => {
          const productIds = data.map((cartDetail: any) => cartDetail.productId);
          this.fetchProductDetails(productIds);
        });
    }
  }

  private fetchProductDetails(productIds: number[]): void {
    const products: Product[] = [];

    productIds.forEach((productId) => {
      this.http
        .get<Product>(`http://localhost:3360/products/${productId}`)
        .subscribe((product) => {
          products.push(product);
          this.cartItemsSubject.next(products); // Update the BehaviorSubject with the latest products
        });
    });
  }

  getCartItems(): Product[] {
    return this.cartItemsSubject.value;
  }
  clearCart() {
    this.cartItemsSubject.next([]); // Clear the cart items by emitting an empty array
  }
  refreshCartItems() {
    this.fetchCartItems();
  }
}
