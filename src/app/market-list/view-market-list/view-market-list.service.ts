import { Injectable } from "@angular/core";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { MarketList } from "../shared/models/market-list";

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
}