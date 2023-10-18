import { Component, OnInit } from '@angular/core';
import { MarketList } from '../../shared/models/market-list';
import { Product } from '../../shared/models/product';
import { ViewMarketListService } from './view-market-list.service';

@Component({
  selector: 'app-view-market-list',
  templateUrl: './view-market-list.component.html',
  providers: [ViewMarketListService]
})
export class ViewMarketListComponent implements OnInit {
  public marketList = {} as MarketList;
  public viewedProducts: Product[] = [];

  constructor(
    private viewMarketListService: ViewMarketListService) {
  }

  ngOnInit(): void {
    this.marketList.id = Math.random().toString();
    this.marketList.userId = Math.random().toString();
    this.marketList.createdAt = new Date().toDateString();
    
    if (this.viewMarketListService.getStoredMarketList()) {
      this.marketList = this.viewMarketListService.getStoredMarketList();
      this.viewedProducts = this.marketList.products;
    }
  }

  public setProductsByImportedData(importedData: string): void {
    this.marketList.products = this.viewMarketListService.importProductsFromStringData(importedData);
    this.setProductsViewed(this.marketList.products);
    this.storeMarketList();
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
    return this.viewedProducts.length > 0;
  }

  public storeMarketList() {
    this.viewMarketListService.storeMarketList(this.marketList);
  }

  public removeStoredMarketList() {
    this.viewMarketListService.removeStoredMarketList();
    this.viewedProducts = [];
  }
}
