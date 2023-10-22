import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MarketListComponent } from './market-list.component';
import { MarketListRoutingModule } from './market-list.routing.module';
import { ViewMarketListComponent } from './view-market-list/view-market-list.component';
import { FilterButtonsComponent } from './view-market-list/components/filter-buttons/filter-buttons.component';
import { ProductPendencyButtonComponent } from './view-market-list/components/product-pendency-button/product-pendency-button.component';
import { ProductSelectionButtonComponent } from './view-market-list/components/product-selection-button/product-selection-button.component';
import { AddProductModalComponent } from './view-market-list/components/add-product-modal/add-product-modal.component';
import { ExportFileButtonComponent } from './view-market-list/components/export-file-button/export-file-button.component';
import { CommandComponent } from './view-market-list/components/command/command.component';
import { ImportFileInputComponent } from './view-market-list/components/import-file-input/import-file-input.component';

import { ViewedProductsStore } from './shared/stores/viewed-products.store';
import { MarketListStore } from './shared/stores/market-list.store';



@NgModule({
  declarations: [
    MarketListComponent,
    ViewMarketListComponent,
    FilterButtonsComponent,
    ProductSelectionButtonComponent,
    ProductPendencyButtonComponent,
    ImportFileInputComponent,
    ExportFileButtonComponent,
    AddProductModalComponent,
    CommandComponent
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
