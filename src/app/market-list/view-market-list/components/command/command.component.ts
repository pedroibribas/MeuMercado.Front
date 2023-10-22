import { Component } from "@angular/core";
import { faFileArrowDown, faFilter } from "@fortawesome/free-solid-svg-icons";
import { EFilterType } from "src/app/market-list/shared/enums/filter-type.enum";

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html'
})
export class CommandComponent {
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
