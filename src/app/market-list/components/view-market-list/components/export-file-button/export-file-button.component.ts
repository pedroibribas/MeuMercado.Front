import { Component } from "@angular/core";
import { AlertService } from "src/app/components/alert/alert.service";
import { ExportFileService } from "src/app/shared/services/export-file.service";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";

@Component({
  selector: 'app-export-file-button',
  templateUrl: './export-file-button.component.html'
})
export class ExportFileButtonComponent {

  constructor(
    private alertService: AlertService,
    private exportFileService: ExportFileService,
    private localStorageService: LocalStorageService
  ) { }

  public exportFile() {
    const products = this.localStorageService.getMarketList().products;

    if (products === null)
      return;

    try {
      this.exportFileService
        .convertProductsToCsv(products)
        .toBlobUTF8_BOM()
        .download();
    } catch (err: any) {
      this.alertService.error(err);
    }
  }
}