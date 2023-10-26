import { Injectable } from "@angular/core";
import { MarketList } from "../models/market-list.model";


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

  public getMarketList(): MarketList | null {
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