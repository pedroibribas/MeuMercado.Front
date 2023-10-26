import { Component } from "@angular/core";
import { ReadFileService } from "src/app/shared/services/read-file.service";
import { FileInputService } from "src/app/shared/services/file-input.service";
import { MarketListStore } from "src/app/market-list/shared/services/stores/market-list.store";
import { csvToObjectArray } from "src/app/shared/utils/format-csv.utils";
import { ViewedProductsStore } from "src/app/market-list/shared/services/stores/viewed-products.store";
import { Product } from "src/app/shared/models/product.model";
import { MarketList } from "src/app/shared/models/market-list.model";

@Component({
  selector: 'app-import-file-input',
  templateUrl: './import-file-input.component.html'
})
export class ImportFileInputComponent {
  
  constructor(
    private marketListStore: MarketListStore,
    private viewedProductsStore: ViewedProductsStore,
    private fileInputService: FileInputService,
    private readFileService: ReadFileService
  ) { }
  
  public readTextFile(event: Event) {
    const fileList = this.fileInputService.getFileList(event);
    if (fileList) {
      this.readFileService.readAsTextAsync(fileList[0])
        .then(
          (text) => typeof text !== 'undefined'
            && this.updateMarketListByCsvText(text)
        );
    }
  }

  private updateMarketListByCsvText(text: string) {
    const marketListDto = {} as MarketList;
    const importedProducts: Product[] = csvToObjectArray(text);

    marketListDto.products = [];
    importedProducts.forEach((i) => marketListDto.products.push(i));
    
    this.marketListStore
      .setState(marketListDto)
      .updateLocalStorage();
      
    this.viewedProductsStore
      .setState(marketListDto.products);
  }
}