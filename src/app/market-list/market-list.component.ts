import { Component, OnInit } from '@angular/core';
import { InitModuleDataService } from './shared/services/init-module-data.service';


@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html'
})
export class MarketListComponent implements OnInit {

  constructor(
    private initModuleDataService: InitModuleDataService,
  ) { }

  ngOnInit(): void {
    this.initModuleDataService.load();
  }
}
