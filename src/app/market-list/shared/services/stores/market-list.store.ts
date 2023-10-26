import { Injectable } from "@angular/core";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { BaseStoreService } from "src/app/shared/services/base/base-store.service";
import { MarketList } from "src/app/shared/models/market-list.model";
import { MarketListDto } from "src/app/shared/models/market-list-dto.model";

@Injectable({
  providedIn: 'root'
})
export class MarketListStore extends BaseStoreService<MarketList> {

  constructor(
    private localStorageService: LocalStorageService
  ) {
    const initialMarketList = new MarketList(
      new MarketListDto(new MarketListDto()));

    super(initialMarketList);
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