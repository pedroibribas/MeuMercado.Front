import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MarketList } from "../models/market-list";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class MarketListStore {
  private subject = new BehaviorSubject<MarketList>({} as MarketList);

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  public load() {
    return this.subject.asObservable();
  }

  public setValue(v: MarketList) {
    this.subject.next(v);
  }

  public getLocalMarketList() {
    const marketList = this.localStorageService.getMarketList();
    if (marketList !== null)
      this.setValue(marketList);
  }
}