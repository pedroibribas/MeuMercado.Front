import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'market-list',
    pathMatch: 'full',
  },
  {
    path: 'market-list',
    loadChildren: () => import('./market-list/market-list.module').then((m) => m.MarketListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
