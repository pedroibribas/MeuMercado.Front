import { Component } from "@angular/core";
import { ReadFileService } from "src/app/shared/services/read-file.service";
import { FileInputService } from "src/app/shared/services/file-input.service";
import { MarketListStore } from "src/app/market-list/shared/services/stores/market-list.store";
import { csvToObjectArray } from "src/app/shared/utils/format-csv.utils";
import { ViewedProductsStore } from "src/app/market-list/shared/services/stores/viewed-products.store";
import { Product } from "src/app/shared/models/product.model";
import { MarketList } from "src/app/shared/models/market-list.model";
import { MarketListDto } from "src/app/shared/models/market-list-dto.model";

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
  
  protected readTextFile(event: Event) {
    const fileList = this.fileInputService.getFileList(event);
    if (fileList) {
      this.readFileService
        .readAsTextAsync(fileList[0])
        .then((text) => this.updateMarketListStateByText(text));
    }
  }

  private updateMarketListStateByText(text: string | undefined) {
    if (typeof text !== 'undefined') {
        const products: Product[] = csvToObjectArray(text);
        const marketListDto = new MarketListDto();
        marketListDto.products = products;
        
        this.marketListStore
          .setState(new MarketList(marketListDto))
          .updateLocalStorage();
          
        this.viewedProductsStore
          .setState(marketListDto.products);
    }    
  }
}