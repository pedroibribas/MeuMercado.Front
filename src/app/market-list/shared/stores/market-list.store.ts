import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MarketList } from "../../../shared/models/market-list";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class MarketListStore {
  private subject = new BehaviorSubject<MarketList>({} as MarketList);

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  private get subjectValue() { return this.subject.value };

  public load() {
    return this.subject.asObservable();
  }

  private getLocalMarketList() {
    const marketList = this.localStorageService.getMarketList();
    if (marketList !== null)
      this.setValue(marketList);
  }

  public setValue(v: MarketList) {
    this.subject.next(v);
  }
  
  /**
   * @description Atualiza o valor de um campo específico do valor global de MarketList.
   * @param key Chave para ser atualizada.
   * @param value Valor atualizado.
   */
  public setField(key: keyof MarketList, value: any) {
    this.subjectValue[key] = value;
    this.subject.next(this.subjectValue);
  }
}