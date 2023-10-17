import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { MOCKED_MARKET_LIST } from "./mockedMarketList";
import { MarketList } from "../../shared/models/market-list";

@Injectable({
    providedIn: "any"
})
export class ViewMarketListService{
  public getMockedMarketList(): Observable<MarketList> {
      return of(MOCKED_MARKET_LIST);
  }
}