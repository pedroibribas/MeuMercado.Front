import { Component, OnInit } from '@angular/core';
import { MarketList } from '../models/market-list';
import { Product } from '../models/product';

@Component({
  selector: 'app-view-market-list',
  templateUrl: './view-market-list.component.html'
})
export class ViewMarketListComponent implements OnInit {
  public marketList: MarketList = {
    id: Math.random().toString(),
    userId: Math.random().toString(),
    createdAt: new Date().toISOString(),
    products: [
      {
        id: "1",
        isSelected: false,
        isPending: true,
        name: "Desinfetante 500ml",
        brand: "Ypê",
        amount: "2"
      },
      {
        id: "2",
        isSelected: true,
        isPending: true,
        name: "Banana Nanica",
        brand: "",
        amount: "1kg"
      },
      {
        id: "3",
        isSelected: false,
        isPending: true,
        name: "Banana",
        brand: "",
        amount: "1kg"
      }
    ]
  };
  public products!: Product[];
  public filterOptionsBtns = ['all', 'selected'];

  ngOnInit(): void {
    this.products = this.marketList.products;
  }

  public hasProductsToShow(): boolean {
    return this.products.length > 0;
  }

  public toggleProductSelection(index: number): void {
    this.products[index].isSelected = !this.products[index].isSelected;
  }

  public toggleProductPending(index: number): void {
    this.products[index].isPending = !this.products[index].isPending;
  }
}
