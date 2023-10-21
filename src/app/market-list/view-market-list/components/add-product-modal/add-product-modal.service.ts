import { Injectable } from "@angular/core";
import { Product } from "src/app/shared/models/product";
import { MarketList } from "src/app/shared/models/market-list";

@Injectable({
    providedIn: 'any'
})
export class AddProductModalService {
  private marketList = {} as MarketList;

  constructor() {
  }

  public from(marketList: MarketList): this {
    this.marketList = marketList;
    return this;
  }

  public getProductsTypes(): string[] {    
    if (this.ensureMarketListProducts()) {
      const storedProductsTypes: string[] = [];

      this.marketList!.products.forEach((p) => {
        if (!storedProductsTypes.find((t) => t === p.type)) {
          storedProductsTypes.push(p.type);
        }
      });

      return storedProductsTypes;
    }

    return [];
  }

  public store(newProduct: Product): void {
      this.marketList.products.push(newProduct);
      // this.viewMarketListService.storeMarketList(this.marketList);
  }

  private ensureMarketListProducts(): boolean {
    return this.marketList !== null
      && this.marketList.products
      && this.marketList.products.length > 0;
  }
}