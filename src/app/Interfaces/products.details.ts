import { Product } from './product-interface';

export interface ProductDetails extends Product {
  brand: string;
  modelName: string;
  color:string;
}
