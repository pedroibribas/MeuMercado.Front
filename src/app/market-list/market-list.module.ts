import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ViewMarketListComponent } from './view-market-list/view-market-list.component';
import { MarketListComponent } from './market-list.component';
import { MarketListRoutingModule } from './market-list.routing.module';
import { FilterOptionsComponent } from './view-market-list/filter-options/filter-options.component';



@NgModule({
  declarations: [
    ViewMarketListComponent,
    MarketListComponent,
    FilterOptionsComponent
  ],
  imports: [
    CommonModule,
    MarketListRoutingModule,
    FormsModule
  ]
})
export class MarketListModule { }
