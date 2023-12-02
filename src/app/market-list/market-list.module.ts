import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MarketListRoutingModule } from './market-list.routing.module';

import { MarketListComponent } from './market-list.component';
import { ViewedProductsStore } from './shared/services/stores/viewed-products.store';
import { MarketListStore } from './shared/services/stores/market-list.store';
import { LocalMarketListService } from './shared/services/local-market-list.service';

import { ViewMarketListComponent } from './view-market-list/view-market-list.component';
import { FilterButtonComponent } from './view-market-list/filter-buttons/filter-button.component';
import { ProductPendencyButtonComponent } from './view-market-list/product-pendency-button/product-pendency-button.component';
import { ProductSelectionButtonComponent } from './view-market-list/product-selection-button/product-selection-button.component';
import { ExportFileButtonComponent } from './view-market-list/export-file-button/export-file-button.component';
import { ImportFileInputComponent } from './view-market-list/import-file-input/import-file-input.component';
import { ToolbarComponent } from './view-market-list/toolbar/toolbar.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import { InitModuleDataService } from './shared/services/init-module-data.service';
import { SetViewedProductsButtonComponent } from './view-market-list/set-viewed-products-button/set-viewed-products-button.component';
import { RemoveAllModalComponent } from './view-market-list/remove-all-modal/remove-all-modal.component';


@NgModule({
  declarations: [
    MarketListComponent,
    ViewMarketListComponent,
    FilterButtonComponent,
    ProductSelectionButtonComponent,
    ProductPendencyButtonComponent,
    ImportFileInputComponent,
    ExportFileButtonComponent,
    AddProductFormComponent,
    SetViewedProductsButtonComponent,
    ToolbarComponent,
    RemoveAllModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MarketListRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    MarketListStore,
    ViewedProductsStore,
    LocalMarketListService,
    InitModuleDataService
  ]
})
export class MarketListModule { }
