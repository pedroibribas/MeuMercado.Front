import { Injectable } from "@angular/core";
import { Product } from "src/app/shared/models/product.model";

import { StoreService } from "src/app/shared/services/templates/store.service";

@Injectable({
  providedIn: 'root'
})
export class ViewedProductsStore extends StoreService<Product[]> {
  constructor() {
    super([] as Product[]);
  }
}