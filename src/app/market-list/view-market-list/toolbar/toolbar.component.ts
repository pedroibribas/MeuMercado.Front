import { Component } from "@angular/core";
import { faFileArrowDown, faFilter } from "@fortawesome/free-solid-svg-icons";
import { EFilterType } from "src/app/market-list/shared/enums/filter-type.enum";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
  public faFileArrowDown = faFileArrowDown;
  public faFilter = faFilter;

  public filterBtnSelected = EFilterType.selected;
  public filterBtnPending = EFilterType.pending;
  public filterBtnDefault = EFilterType.default;


  public isAddProductModalOpen = false;

  public toggleIsAddProductModal(state: boolean) {
    this.isAddProductModalOpen = state;
  }  
}
