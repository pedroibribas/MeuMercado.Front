import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MarketList } from '../../shared/models/market-list';
import { MarketListStore } from '../shared/services/stores/market-list.store';
import { ViewedProductsStore } from '../shared/services/stores/viewed-products.store';
import { InitModuleDataService } from '../shared/services/init-module-data.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-view-market-list',
  templateUrl: './view-market-list.component.html',
})
export class ViewMarketListComponent implements OnInit, OnDestroy {
  protected marketList = {} as MarketList;
  protected viewedProducts: Product[] = [];
  private marketListSubscription!: Subscription;
  private viewedProductsSubscription!: Subscription;

  constructor(
    private marketListStore: MarketListStore,
    private viewedProductsStore: ViewedProductsStore,
    private initModuleDataService: InitModuleDataService
  ) { }

  ngOnInit(): void {
debugger
    this.initModuleDataService.load();

    this.marketListSubscription = this.marketListStore.load()
      .subscribe((l) => 
        this.marketList = l);

    this.viewedProductsSubscription = this.viewedProductsStore.load()
      .subscribe((p) =>
        this.viewedProducts = p);
  }
  
  ngOnDestroy(): void {
    console.log('destroyed')
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
