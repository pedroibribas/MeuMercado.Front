import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MarketListStore } from '../shared/services/stores/market-list.store';
import { ViewedProductsStore } from '../shared/services/stores/viewed-products.store';
import { Product } from 'src/app/shared/models/product.model';
import { MarketList } from 'src/app/shared/models/market-list.model';
import { faCartShopping, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-view-market-list',
  templateUrl: './view-market-list.component.html',
})
export class ViewMarketListComponent implements OnInit, OnDestroy {
  protected marketList = {} as MarketList;
  protected viewedProducts: Product[] = [];
  protected faClipboardCheck = faClipboardCheck;
  protected faCartShopping = faCartShopping;
  private marketListSubscription!: Subscription;
  private viewedProductsSubscription!: Subscription;

  constructor(
    private marketListStore: MarketListStore,
    private viewedProductsStore: ViewedProductsStore,
  ) { }

  ngOnInit(): void {
    this.marketListSubscription = this.marketListStore.load()
      .subscribe((l) =>
        this.marketList = l);
    this.viewedProductsSubscription = this.viewedProductsStore.load()
      .subscribe((p) =>
        this.viewedProducts = p);
  }

  ngOnDestroy(): void {
    this.marketListSubscription.unsubscribe();
    this.viewedProductsSubscription.unsubscribe();
  }

  public toggleProductPropById(prop: 'isSelected' | 'isPending', id: string): void {
    const productIndex = this.marketList.products.findIndex((p) => p.id === id);
    this.marketList.products[productIndex][prop] = !this.marketList.products[productIndex][prop];
    this.marketListStore
      .setState(this.marketList)
      .updateLocalStorage();
  }

  public hasProductsToShow(): boolean {
    return this.viewedProducts != null && this.viewedProducts.length > 0;
  }

  protected tableDataClassByProductState(isSelected: boolean, isPending: boolean): string {
    let classes = 'text-wrap';

    if (isSelected && isPending) {
      return classes += ' text-body-emphasis';
    }
    
    return classes += ' text-body-tertiary';
  }
}
