import { Component } from "@angular/core";
import { ViewMarketListService } from "../../view-market-list.service";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html'
})
export class CommandComponent {
  public faFileArrowDown = faFileArrowDown;
  public isAddProductModalOpen = false;

  constructor(
    private viewMarketListService: ViewMarketListService) {
  }

  public setProductsByImportedData(importedData: string): void {
    this.viewMarketListService.importProductsFromStringData(importedData);
    // this.storeMarketList();
  }

//   public storeMarketList() {
//     this.viewMarketListService.storeMarketList();
//   }

  public removeStoredMarketList() {
    this.viewMarketListService.removeStoredMarketList();
  }

  public toggleIsAddProductModal(state: boolean) {
    this.isAddProductModalOpen = state;
  }
  
}
