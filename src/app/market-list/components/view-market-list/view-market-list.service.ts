import { Injectable } from "@angular/core";
import { Product } from "../../shared/models/product";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { MarketList } from "../../shared/models/market-list";

@Injectable({
    providedIn: "any"
})
export class ViewMarketListService{

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  public storeMarketList(marketList: MarketList) {
    this.localStorageService.saveMarketList(marketList);
  }

  public getStoredMarketList(): MarketList | null {
    return this.localStorageService.getMarketList();
  }

  public removeStoredMarketList(): void {
    this.localStorageService.removeMarketList();
  }

  public importProductsFromStringData(stringData: string): Product[] {
    const products: Product[] = [];

    stringData.split('$').forEach((product) => {
      const data = product.split('_');
      products.push(this.newProductByStringData(data));
    });

    return products;
  }
  
  private newProductByStringData(data: string[]): Product {
    return {
      id: Math.random().toString(),
      isPending: true,
      isSelected: false,
      name: data[0],
      brand: data[1],
      amount: data[2],
      type: data[3]
    };
  }
    
}