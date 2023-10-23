import { Component } from "@angular/core";
import { faFileArrowDown, faFilter, faGear } from "@fortawesome/free-solid-svg-icons";
import { EFilterType } from "src/app/market-list/shared/enums/filter-type.enum";
import { EModalType } from "../../shared/enums/modal-type.enum";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
  
  public faFileArrowDown = faFileArrowDown;
  public faFilter = faFilter;
  public faGear = faGear;

  public filterBtnSelected = EFilterType.selected;
  public filterBtnPending = EFilterType.pending;
  public filterBtnDefault = EFilterType.default;

  public addProductModalBtn = EModalType.addProductForm;
}
