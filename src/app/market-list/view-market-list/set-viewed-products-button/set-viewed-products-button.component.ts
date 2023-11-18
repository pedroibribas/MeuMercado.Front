import { Component, Input, OnInit } from "@angular/core";
import { SetViewedProductsButtonService } from "./set-viewed-products-button.service";
import { ISetViewedProductsButton } from "./set-viewed-products-button.interface";
import { ESetViewedProductsButton } from "./set-viewed-products-button.enum";
import { SetViewedProductsButton } from "./set-viewed-products-button";


@Component({
    selector: "set-viewed-products-button",
    templateUrl: "./set-viewed-products-button.component.html",
    providers: [SetViewedProductsButtonService]
})
export class SetViewedProductsButtonComponent implements OnInit {
    @Input({ required: true }) buttonType!: ESetViewedProductsButton;
    protected button!: ISetViewedProductsButton;
    
    constructor(
        private setViewedProductsButtonService: SetViewedProductsButtonService
    ) { }

    ngOnInit(): void {
        this.button = SetViewedProductsButton[this.buttonType];
    }

    protected setViewedProducts(): void {
        this.setViewedProductsButtonService.updateProductsByButton(this.button);
    }

}
