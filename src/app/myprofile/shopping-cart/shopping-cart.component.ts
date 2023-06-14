import { Component } from '@angular/core';
import { Product } from 'src/app/Interfaces/product-interface';
import { ProductStorageService } from 'src/app/Storage/products-storage';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartProducts: Product[] = []
constructor(private productsData: ProductStorageService){
  this.cartProducts = this.productsData.getAllSimilarProducts()
}



}
