import { Component } from '@angular/core';
import { SingleProductApiService } from './api.service.singleproduct';
import { Product } from '../Interfaces/product-interface';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {
  singleProductData:Product[] = []
constructor(private singleProductApi: SingleProductApiService){
  this.singleProductApi.getSingleProductsDetails().subscribe(res => {
    this.singleProductData = res.products
    console.log(this.singleProductData)
  })
}

}
