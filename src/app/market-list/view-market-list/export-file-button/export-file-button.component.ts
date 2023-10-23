import { Component, Input, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AlertService } from "src/app/components/alert/alert.service";
import { MarketListStore } from "src/app/market-list/shared/stores/market-list.store";
import { ViewedProductsStore } from "src/app/market-list/shared/stores/viewed-products.store";
import { Product } from "src/app/shared/models/product";
import { ExportFileService } from "src/app/shared/services/export-file.service";

@Component({
  selector: 'app-export-file-button',
  templateUrl: './export-file-button.component.html'
})
export class ExportFileButtonComponent implements OnInit {
  protected buttonTitle = 'Exportar';

  @Input()
    public exportProductsFrom: 'default' | 'view' = 'default';

  constructor(
    private marketListStore: MarketListStore,
    private viewedProductsStore: ViewedProductsStore,
    private alertService: AlertService,
    private exportFileService: ExportFileService
  ) { }

  ngOnInit(): void {
    switch (this.exportProductsFrom) {
      case 'view':
        this.buttonTitle = 'Exportar tela';
        break;
      default:
        break;
    }
  }

  public exportFile() {
    let products: Product[];

    switch (this.exportProductsFrom) {
      case 'view':
        products = this.getViewedProducts();        
        break;
      default:
        products = this.getMarketListProducts();
        break;
    }

    try {
      this.exportFileService
        .convertProductsToCsv(products)
        .toBlobUTF8_BOM()
        .download();
    } catch (err: any) {
      this.alertService.error(err);
    }
  }

  private getMarketListProducts(): Product[] {
    let products: Product[] = [];
    
    this.marketListStore
      .load()
      .subscribe((l) => products = l.products)
      .unsubscribe();
    
    return products;
  }

  private getViewedProducts(): Product[] {
    let products: Product[] = [];

    this.viewedProductsStore
      .load()
      .subscribe((p) => products = p)
      .unsubscribe();
    
    return products;
  }
}