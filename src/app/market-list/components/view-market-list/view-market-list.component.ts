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
    this.setInitialData();
  }

  private setInitialData(): void {
    this.viewMarketListService.getMockedMarketList()
      .subscribe(
        (mockedMarketList) => {
          this.marketList = mockedMarketList;
          this.viewedProducts = mockedMarketList.products;
        }
      );
  }

  public setProductsViewed(filteredProducts: Product[]) {
    this.viewedProducts = filteredProducts;
  }

  public hasProductsToShow(): boolean {
    return this.viewedProducts.length > 0;
  }

  public toggleProductSelection(index: number): void {
    this.viewedProducts[index].isSelected = !this.viewedProducts[index].isSelected;
  }

  public toggleProductPending(index: number): void {
    this.viewedProducts[index].isPending = !this.viewedProducts[index].isPending;
  }
}
