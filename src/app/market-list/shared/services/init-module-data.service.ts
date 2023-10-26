import { Injectable } from "@angular/core";
import { LocalMarketListService } from "./local-market-list.service";

@Injectable({
  providedIn: 'any'
})
export class InitModuleDataService {

  constructor(
    private localMarketListService: LocalMarketListService
  ) { }

  public load() {
    this.localMarketListService
      .getLocalStorage()
      .setMarketListStore()
      .setViewedProductsStore();
  }
}