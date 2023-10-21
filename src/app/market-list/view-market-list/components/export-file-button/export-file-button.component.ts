import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { AlertService } from "src/app/components/alert/alert.service";
import { MarketListStore } from "src/app/market-list/shared/stores/market-list.store";
import { ExportFileService } from "src/app/shared/services/export-file.service";

@Component({
  selector: 'app-export-file-button',
  templateUrl: './export-file-button.component.html'
})
export class ExportFileButtonComponent {
  private marketListSubscription!: Subscription;

  constructor(
    private marketListStore: MarketListStore,
    private alertService: AlertService,
    private exportFileService: ExportFileService
  ) { }

  public exportFile() {
    this.marketListSubscription = this.marketListStore.load()
      .subscribe((marketList) => {
        if (marketList.products  === null) {
          return;  
        }
        try {
          this.exportFileService
            .convertProductsToCsv(marketList.products)
            .toBlobUTF8_BOM()
            .download();
        } catch (err: any) {
          this.alertService.error(err);
        }
      });

    this.marketListSubscription.unsubscribe();
  }
}