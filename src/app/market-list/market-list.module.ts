import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketListComponent } from './market-list.component';
import { MarketListRoutingModule } from './market-list.routing.module';
import { ViewMarketListComponent } from './components/view-market-list/view-market-list.component';
import { FilterButtonsComponent } from './components/view-market-list/components/filter-buttons/filter-buttons.component';
import { ToggleProductPendencyButtonComponent } from './components/view-market-list/components/toggle-product-pendency-button/toggle-product-pendency-button.component';
import { FileInputComponent } from './components/view-market-list/components/file-input/file-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductSelectionButtonComponent } from './components/view-market-list/components/product-selection-button/product-selection-button.component';
import { AddProductModalComponent } from './components/view-market-list/components/add-product-modal/add-product-modal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MarketListComponent,
    ViewMarketListComponent,
    FilterButtonsComponent,
    ProductSelectionButtonComponent,
    ToggleProductPendencyButtonComponent,
    FileInputComponent,
    AddProductModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MarketListRoutingModule,
    FontAwesomeModule
  ],
})
export class MarketListModule { }
