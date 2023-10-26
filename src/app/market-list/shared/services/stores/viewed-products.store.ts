import { Injectable } from "@angular/core";

import { BaseStoreService } from "src/app/shared/services/base/base-store.service";
import { Product } from "src/app/shared/models/product.model";


@Injectable({
  providedIn: 'root'
})
export class ViewedProductsStore extends BaseStoreService<Product[]> {
  
  constructor() {
    super([]);
  }
}