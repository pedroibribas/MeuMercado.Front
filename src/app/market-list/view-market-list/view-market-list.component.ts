import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MarketList } from '../../shared/models/market-list';
import { Product } from '../../shared/models/product';
import { MarketListStore } from '../shared/stores/market-list.store';
import { ViewedProductsStore } from '../shared/stores/viewed-products.store';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-view-market-list',
  templateUrl: './view-market-list.component.html',
})
export class ViewMarketListComponent implements OnInit, OnDestroy {
  public marketList = {} as MarketList;
  public viewedProducts: Product[] = [];
  private marketListSubscription!: Subscription;
  private viewedProductsSubscription!: Subscription;

  constructor(
    private marketListStore: MarketListStore,
    private viewedProductsStore: ViewedProductsStore,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    const localMarketList = this.localStorageService.getMarketList();

    if (localMarketList !== null) {
      this.marketListStore.setState(localMarketList);
      this.viewedProductsStore.setState(localMarketList.products);
    }

    this.marketListSubscription = this.marketListStore.load()
      .subscribe((l) => this.marketList = l);

    this.viewedProductsSubscription = this.viewedProductsStore.load()
      .subscribe((p) => this.viewedProducts = p);
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
}
