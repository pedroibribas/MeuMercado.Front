import { Injectable } from "@angular/core";
import { LocalMarketListService } from "./local-market-list.service";

@Injectable({
  providedIn: 'any'
})
export class InitModuleDataService {

  constructor(
    private localMarketListService: LocalMarketListService
  ) { }

  public load(): this {
    this.localMarketListService
      .getLocalStorage()
      .setMarketListStore()
      .setViewedProductsStore();

    return this;
  }

  public debugMarketListStore(): this {
    this.localMarketListService.logMarketListStore();
    return this;
  }

  public debugViewedProductsStore(): this {
    this.localMarketListService.logViewedProductsStore();
    return this;
  }

}