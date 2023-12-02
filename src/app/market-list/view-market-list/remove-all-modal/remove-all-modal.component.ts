import { Component } from "@angular/core";
import { MarketListStore } from "../../shared/services/stores/market-list.store";
import { ViewedProductsStore } from "../../shared/services/stores/viewed-products.store";
import { Location } from "@angular/common";

@Component({
  selector: 'app-remove-all-modal',
  templateUrl: './remove-all-modal.component.html'
})
export class RemoveAllModalComponent {
  protected isLoadingRemoval = false;
  
  constructor(
    private _marketListStore: MarketListStore,
    private _viewedProductsStore: ViewedProductsStore,
    private _location: Location
  ) { }

  protected removeAllProducts() {
    this.isLoadingRemoval = true;
    setTimeout(() => {
      this.clearAllData();
      this.isLoadingRemoval = false;
      this.navigateBack();
    }, 1250);
  }

  private clearAllData(): void {
    this._marketListStore
      .clearState()
      .updateLocalStorage();
    this._viewedProductsStore.clearState();
  }

  private navigateBack(): void {
    this._location.back();
  }
}