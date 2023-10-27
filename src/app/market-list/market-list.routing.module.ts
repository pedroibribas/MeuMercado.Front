import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarketListComponent } from './market-list.component';
import { ViewMarketListComponent } from './view-market-list/view-market-list.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';


const routes: Routes = [
  {
    path: '',
    component: MarketListComponent,

    children: [
      {
        path: 'view',
        component: ViewMarketListComponent
      },
      {
        path: 'newproduct',
        component: AddProductFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketListRoutingModule { }
