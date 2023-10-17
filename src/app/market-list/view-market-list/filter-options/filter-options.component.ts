import { Component, Input } from '@angular/core';
import { MarketList } from '../../models/market-list';
import { Product } from '../../models/product';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html'
})
export class FilterOptionsComponent {
  @Input() marketList!: MarketList;
  @Input() products!: Product[];

  public showAllProducts(): void {
    this.products = this.marketList.products;
  }

  public showSelectedProducts(): void {
    this.products = this.marketList.products.filter(
      (p) => !p.isSelected);
  }

  public showPendingProducts(): void {
    this.products = this.marketList.products.filter(
      (p) => !p.isSelected && p.isPending);
  }
}
