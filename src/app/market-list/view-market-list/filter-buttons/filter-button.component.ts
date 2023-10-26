import { Component, Input, OnInit } from '@angular/core';
import { ViewedProductsStore } from 'src/app/market-list/shared/services/stores/viewed-products.store';
import { MarketListStore } from 'src/app/market-list/shared/services/stores/market-list.store';

import { IFilterButtonFactory } from '../../shared/interfaces/filter-button-factory.interface';
import { EFilterType } from '../../shared/enums/filter-type.enum';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html'
})
export class FilterButtonComponent implements OnInit {
  @Input({ required: true })
    type!: EFilterType;
  private allProducts: Product[] = [];
  protected btnName = '';

  constructor(
    private marketListStore: MarketListStore,
    private viewedProductsStore: ViewedProductsStore
  ) { }

  ngOnInit(): void {
    this.btnName = this.componentFactory[this.type].btnName;
  }

  protected filter() {
    this.marketListStore
      .load()
      .subscribe((l) => this.allProducts = l.products ?? this.allProducts)
      .unsubscribe();

    this.componentFactory[this.type].setViewedProducts();
  }

  private viewAllProducts(): void {
    this.viewedProductsStore.setState(this.allProducts);
  }

  private viewSelectedProducts(): void {
    if (this.allProducts.length !== 0) {
      this.viewedProductsStore.setState(
        this.allProducts.filter((p) => p.isSelected)
      );
    }
  }

  private viewPendingProducts(): void {
    if (this.allProducts.length !== 0) {
      this.viewedProductsStore.setState(
        this.allProducts.filter((p) => p.isSelected && !p.isPending)
      );
    }
  }

  private componentFactory: IFilterButtonFactory = {
    [EFilterType.selected]: { 
      btnName: 'Selecionados',
      setViewedProducts: (): void => this.viewSelectedProducts()
    },
    [EFilterType.pending]: {
      btnName: 'Pendentes',
      setViewedProducts: (): void => this.viewPendingProducts()
    },
    [EFilterType.default]: {
      btnName: 'Todos',
      setViewedProducts: (): void => this.viewAllProducts()
    }
  };
}
