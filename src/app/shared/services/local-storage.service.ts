import { Injectable } from "@angular/core";
import { MarketList } from "src/app/market-list/shared/models/market-list";

const LocalStorageKey = "MeuMercado_MarketList";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public saveMarketList(data: MarketList): void {
    localStorage.setItem(
      LocalStorageKey,
      JSON.stringify(data)
    );
  }

  public getMarketList(): MarketList {
    const marketList = localStorage.getItem(
      LocalStorageKey
    );
    return marketList ? JSON.parse(marketList) : null;
  }

  public removeMarketList(): void {
    localStorage.removeItem(
      LocalStorageKey
    );
  }
}