import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketListComponent } from './market-list.component';
import { ViewMarketListComponent } from './components/view-market-list/view-market-list.component';

const routes: Routes = [
    {
        path: '',
        component: MarketListComponent,
        children: [
            {
                path: 'view',
                component: ViewMarketListComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketListRoutingModule { }
