import { Injectable } from "@angular/core";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { MarketListStore } from "./stores/market-list.store";
import { ViewedProductsStore } from "./stores/viewed-products.store";
import { MarketList } from "src/app/shared/models/market-list";

@Injectable({
  providedIn: 'any'
})
export class LocalMarketListService {
  private localMarketList: MarketList | null = null;

  constructor(
    private localStorageService: LocalStorageService,
    private marketListStore: MarketListStore,
    private viewedProductsStore: ViewedProductsStore
  ) { }

  public getLocalStorage(): this {
    this.localMarketList = this.localStorageService.getMarketList();
    return this;
  }

  public setMarketListStore(): this {
    if (this.localMarketList !== null) {
      this.marketListStore.setState(this.localMarketList);
    }
    return this;
  }

  public setViewedProductsStore(): this {
    if (this.localMarketList !== null
      && this.localMarketList.products !== null
    ) {
      this.viewedProductsStore.setState(this.localMarketList.products);
    }
    return this;
  }
}