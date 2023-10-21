import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MarketList } from '../shared/models/market-list';
import { Product } from '../shared/models/product';
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

  private updateViewData(): Subscription {
    return this.marketListStore
      .load()
      .subscribe((marketList) => {
        this.marketList = marketList;

        console.log('observer_ViewMktListComponent');
        console.log(marketList);
        console.log(this.marketList);
        
        this.viewedProducts = this.marketList.products ?? this.viewedProducts;
      });
  }

  public toggleProductSelectionById(id: string): void {
    const index = this.getMarketListProductIndexById(id);
    this.marketList.products[index].isSelected = !this.marketList.products[index].isSelected;
    this.updateViewedProducts();
    // this.storeMarketList();
  }

  public toggleProductPendingById(id: string): void {
    const index = this.getMarketListProductIndexById(id);
    this.marketList.products[index].isPending = !this.marketList.products[index].isPending;
    this.updateViewedProducts();
    // this.storeMarketList();
  }

  private getMarketListProductIndexById(id: string): number {
    return this.marketList.products.findIndex((p) => p.id === id);
  }

  private updateViewedProducts(): void {
    this.viewedProducts = this.marketList.products;
  }

  public hasProductsToShow(): boolean {
    return this.viewedProducts != null && this.viewedProducts.length > 0;
  }

  ngOnDestroy(): void {
    this.marketListSubscription.unsubscribe();
  }  
}
