import { Injectable } from "@angular/core";
import { MarketList } from "src/app/market-list/shared/models/market-list";

enum LocalStorageKey {
  MeuMercado_MarketList
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public saveMarketList(data: MarketList): void {
    localStorage.setItem(
      LocalStorageKey.MeuMercado_MarketList.toString(),
      JSON.stringify(data)
    );
  }

  public getMarketList(): MarketList {
    const marketList = localStorage.getItem(
      LocalStorageKey.MeuMercado_MarketList.toString()
    );
    return marketList ? JSON.parse(marketList) : null;
  }

  public removeMarketList(): void {
    localStorage.removeItem(
      LocalStorageKey.MeuMercado_MarketList.toString()
    );
  }
}