import { Product } from "./product.model";


export class MarketListDto {
  public products?: Product[];

  constructor(init?: MarketListDto) {
    this.products = init?.products;
  }
}
