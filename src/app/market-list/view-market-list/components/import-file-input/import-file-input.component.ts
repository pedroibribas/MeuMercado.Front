import { Component } from "@angular/core";
import { ReadFileService } from "src/app/shared/services/read-file.service";
import { FileInputService } from "src/app/shared/services/file-input.service";
import { MarketListStore } from "src/app/market-list/shared/stores/market-list.store";
import { Subscription } from "rxjs";
import { csvToObjectArray } from "src/app/shared/utils/format-csv.utils";
import { Product } from "src/app/market-list/shared/models/product";

@Component({
  selector: 'app-import-file-input',
  templateUrl: './import-file-input.component.html'
})
export class ImportFileInputComponent {
  private marketListSubscription!: Subscription;

  constructor(
    private marketListStore: MarketListStore,
    private fileInputService: FileInputService,
    private readFileService: ReadFileService
  ) { }
  
  public readTextFile(event: Event) {
    const fileList = this.fileInputService.getFileList(event);
    if (fileList) {
      this.readFileService
        .readAsTextAsync(fileList[0])
        .then((text) => {
            if (typeof text !== 'undefined') {
              const products: Product[] = csvToObjectArray(text);
              this.updateMarketListStore(products);
            }
        });
    }
  }

  private updateMarketListStore(products: Product[]) {
    this.marketListSubscription = this.marketListStore.load()
      .subscribe((marketList) => {
        marketList.products = products;
        this.marketListStore.setValue(marketList);
      });
    this.marketListSubscription.unsubscribe();
  }
}