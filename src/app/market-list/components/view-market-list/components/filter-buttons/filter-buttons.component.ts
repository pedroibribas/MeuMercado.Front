import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../shared/models/product';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html'
})
export class FilterButtonsComponent {
  @Input() allProducts: Product[] = [];
  @Output() newViewedProductsEvent = new EventEmitter<Product[]>();

  public showAllProducts(): void {
    this.newViewedProductsEvent.emit(this.allProducts);
  }

  public showSelectedProducts(): void {
    this.newViewedProductsEvent.emit(this.getSelectedProducts());
  }

  public showPendingProducts(): void {
    this.newViewedProductsEvent.emit(this.getPendingProducts());
  }

  private getSelectedProducts(): Product[] {
    return this.allProducts.filter((p) => !p.isSelected);
  }

  private getPendingProducts(): Product[] {
    return this.allProducts.filter((p) => !p.isSelected && p.isPending);
  }
}
