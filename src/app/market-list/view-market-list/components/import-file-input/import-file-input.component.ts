import { Component } from "@angular/core";
import { ReadFileService } from "src/app/shared/services/read-file.service";
import { FileInputService } from "src/app/shared/services/file-input.service";
import { MarketListStore } from "src/app/market-list/shared/stores/market-list.store";
import { csvToObjectArray } from "src/app/shared/utils/format-csv.utils";
import { Product } from "src/app/market-list/shared/models/product";
import { MarketList } from "src/app/market-list/shared/models/market-list";

@Component({
  selector: 'app-import-file-input',
  templateUrl: './import-file-input.component.html'
})
export class ImportFileInputComponent {
  
  constructor(
    private marketListStore: MarketListStore,
    private fileInputService: FileInputService,
    private readFileService: ReadFileService
  ) { }
  
  public readTextFile(event: Event) {
    const fileList = this.fileInputService.getFileList(event);
    if (fileList) {
      this.readFileService.readAsTextAsync(fileList[0])
        .then(
          (text) => typeof text !== 'undefined' && this.updateMarketListByCsvText(text)
        );
    }
  }

  private updateMarketListByCsvText(text: string) {
    const marketListDto = {} as MarketList;
    const importedProducts: Product[] = csvToObjectArray(text);

    marketListDto.products = [];
    importedProducts.forEach((i) => marketListDto.products.push(i));
    
    this.marketListStore.setValue(marketListDto);
  }
}