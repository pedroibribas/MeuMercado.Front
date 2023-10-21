import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MarketList } from '../shared/models/market-list';
import { Product } from '../shared/models/product';
import { MarketListStore } from '../shared/stores/market-list.store';
import { ViewMarketListService } from './view-market-list.service';

@Component({
  selector: 'app-view-market-list',
  templateUrl: './view-market-list.component.html',
  providers: [ViewMarketListService]
})
export class ViewMarketListComponent implements OnInit {
  private marketListSubscription!: Subscription;

  public marketList: MarketList = {
    id: Math.random().toString(),
    userId: Math.random().toString(),
    createdAt: new Date().toDateString(),
    products: []
  };
  public viewedProducts: Product[] = [];
  public isAddProductModalOpen = false;

  constructor(
    private marketListStore: MarketListStore,
    private viewMarketListService: ViewMarketListService) {
  }

  ngOnInit(): void {
    this.marketListSubscription = this.marketListStore
      .load()
      .subscribe((marketList) => {
        this.marketList = marketList;
        this.viewedProducts = this.marketList.products ?? this.viewedProducts;
      });
  }

  public setProductsViewed(nextViewedProducts: Product[]) {
    this.viewedProducts = nextViewedProducts;
  }

  public toggleProductSelectionById(id: string): void {
    const index = this.getMarketListProductIndexById(id);
    this.marketList.products[index].isSelected = !this.marketList.products[index].isSelected;
    this.updateViewedProducts();
    this.storeMarketList();
  }

  public toggleProductPendingById(id: string): void {
    const index = this.getMarketListProductIndexById(id);
    this.marketList.products[index].isPending = !this.marketList.products[index].isPending;
    this.updateViewedProducts();
    this.storeMarketList();
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

  public storeMarketList() {
    this.viewMarketListService.storeMarketList(this.marketList);
  }

  public removeStoredMarketList() {
    this.viewMarketListService.removeStoredMarketList();
    this.viewedProducts = [];
  }

  public toggleIsAddProductModal(state: boolean) {
    this.isAddProductModalOpen = state;
  }
}
