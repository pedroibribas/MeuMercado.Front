import { Component } from "@angular/core";
import { faEye, faLayerGroup, faPen } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { EFilterType } from "src/app/market-list/shared/enums/filter-type.enum";
import { EModalType } from "../../shared/enums/modal-type.enum";
import { ESetViewedProductsButton } from "../set-viewed-products-button/set-viewed-products-button.enum";

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {

    protected faFile = faFile;
    protected faEye = faEye;
    protected faLayerGroup = faLayerGroup;
    protected faPen = faPen;

    protected selectAllViewedProducts = ESetViewedProductsButton.selectAllViewedProducts;
    protected unselectAllViewedProducts = ESetViewedProductsButton.unselectAllViewedProducts;

    protected filterBtnSelected = EFilterType.selected;
    protected filterBtnPending = EFilterType.pending;
    protected filterBtnDefault = EFilterType.default;

    protected addProductModalBtn = EModalType.addProductForm;

}
