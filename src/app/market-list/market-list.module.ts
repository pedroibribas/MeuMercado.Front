import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MarketListRoutingModule } from './market-list.routing.module';

import { MarketListComponent } from './market-list.component';
import { ViewMarketListComponent } from './view-market-list/view-market-list.component';
import { FilterButtonComponent } from './view-market-list/filter-buttons/filter-button.component';
import { ProductPendencyButtonComponent } from './view-market-list/product-pendency-button/product-pendency-button.component';
import { ProductSelectionButtonComponent } from './view-market-list/product-selection-button/product-selection-button.component';
import { AddProductModalComponent } from './view-market-list/add-product-modal/add-product-modal.component';
import { ExportFileButtonComponent } from './view-market-list/export-file-button/export-file-button.component';
import { ImportFileInputComponent } from './view-market-list/import-file-input/import-file-input.component';
import { ToolbarComponent } from './view-market-list/toolbar/toolbar.component';

import { ViewedProductsStore } from './shared/stores/viewed-products.store';
import { MarketListStore } from './shared/stores/market-list.store';



@NgModule({
  declarations: [
    MarketListComponent,
    ViewMarketListComponent,
    FilterButtonComponent,
    ProductSelectionButtonComponent,
    ProductPendencyButtonComponent,
    ImportFileInputComponent,
    ExportFileButtonComponent,
    AddProductModalComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MarketListRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    MarketListStore,
    ViewedProductsStore
  ]
})
export class MarketListModule { }
