import { Injectable } from "@angular/core";
import { MarketList } from "../../../shared/models/market-list";
import { StoreService } from "src/app/shared/services/templates/store.service";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class MarketListStore extends StoreService<MarketList> {
  constructor(
    private localStorageService: LocalStorageService
  ) {
    super({} as MarketList);
  }
  
  /**
   * @description Atualiza o valor de um campo específico do valor global de MarketList.
   * @param key Chave para ser atualizada.
   * @param value Valor atualizado.
   */
  public setField(key: keyof MarketList, value: any): this {
    this.subjectValue[key] = value;
    this.setState(this.subjectValue);
    return this;
  }

  public updateLocalStorage(): void {
    this.localStorageService.saveMarketList(this.subjectValue);
  }
}