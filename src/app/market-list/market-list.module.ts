import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketListComponent } from './market-list.component';
import { MarketListRoutingModule } from './market-list.routing.module';
import { ViewMarketListComponent } from './components/view-market-list/view-market-list.component';
import { FilterButtonsComponent } from './components/view-market-list/components/filter-buttons/filter-buttons.component';
import { SelectProductButtonComponent } from './components/view-market-list/components/select-product-button/select-product-button.component';
import { ToggleProductPendencyButtonComponent } from './components/view-market-list/components/toggle-product-pendency-button/toggle-product-pendency-button.component';
import { FileInputComponent } from './components/view-market-list/components/file-input/file-input.component';



@NgModule({
  declarations: [
    MarketListComponent,
    ViewMarketListComponent,
    FilterButtonsComponent,
    SelectProductButtonComponent,
    ToggleProductPendencyButtonComponent,
    FileInputComponent
  ],
  imports: [
    CommonModule,
    MarketListRoutingModule
  ],
})
export class MarketListModule { }
