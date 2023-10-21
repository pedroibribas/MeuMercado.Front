import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MarketList } from '../../shared/models/market-list';
import { Product } from '../../shared/models/product';
import { MarketListStore } from '../shared/stores/market-list.store';

@Component({
  selector: 'app-view-market-list',
  templateUrl: './view-market-list.component.html',
})
export class ViewMarketListComponent implements OnInit, OnDestroy {

  public marketList = {} as MarketList;
  public viewedProducts: Product[] = [];

  private marketListSubscription!: Subscription;

  constructor(
    private marketListStore: MarketListStore
  ) { }

  ngOnInit(): void {
    this.marketListSubscription = this.updateViewData();
  }
  
  ngOnDestroy(): void {
    this.marketListSubscription.unsubscribe();
  }

  private updateViewData(): Subscription {
    return this.marketListStore
      .load()
      .subscribe((marketList) => {
        this.marketList = marketList;        
        this.viewedProducts = this.marketList.products ?? this.viewedProducts;
      });
  }

  public toggleProductPropById(prop: 'isSelected' | 'isPending', id: string): void {
    const productIndex = this.marketList.products.findIndex((p) => p.id === id);
    this.marketList.products[productIndex][prop] = !this.marketList.products[productIndex][prop];    
    this.marketListStore.setValue(this.marketList);
  }

  public hasProductsToShow(): boolean {
    return this.viewedProducts != null && this.viewedProducts.length > 0;
  }
}
