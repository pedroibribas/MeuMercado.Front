import { Component, OnInit } from '@angular/core';
import { MarketListStore } from './shared/services/stores/market-list.store';
import { InitModuleDataService } from './shared/services/init-module-data.service';
import { ViewedProductsStore } from './shared/services/stores/viewed-products.store';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html'
})
export class MarketListComponent implements OnInit {

  constructor(
    private marketListStore: MarketListStore,
    private viewedProductsStore: ViewedProductsStore,
    private initModuleDataService: InitModuleDataService
  ) { }

  ngOnInit(): void {
    this.initModuleDataService.load();
  }

  private marketListStoreDebugger() {
    console.warn('MarketListComponent: f marketListStoreDebugger');
    this.marketListStore.load().subscribe((m) => {
      console.table(m.products);
    });
  }
  private viewedProductsStoreDebugger() {
    console.warn('MarketListComponent: f viewedProductsStoreDebugger');
    this.viewedProductsStore.load().subscribe((m) => {
      console.table(m);
    });
  }

}
