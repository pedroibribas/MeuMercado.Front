import { MarketList } from "src/app/shared/models/market-list.model";
import { Product } from "src/app/shared/models/product.model";
import { Injectable } from "@angular/core";
import { MarketListStore } from "../../shared/services/stores/market-list.store";
import { ViewedProductsStore } from "../../shared/services/stores/viewed-products.store";
import { ISetViewedProductsButton } from "./set-viewed-products-button.interface";

@Injectable({
    providedIn: 'root'
})
export class SetViewedProductsButtonService {
    private marketListDto = {} as MarketList;
    private viewedProductsDto: Product[] = [];

    constructor(
        private marketListStore: MarketListStore,
        private viewedProductsStore: ViewedProductsStore
    ) { }

    public updateProductsByButton(button: ISetViewedProductsButton): void {
        this.initViewedProductsDto();
        this.initMarketListDto();

        this.updateViewedProductsDtoByButton(button);
        this.updateMarketListDtoByButton(button);

        this.viewedProductsStore.setState(this.viewedProductsDto);

        this.marketListStore.setState(this.marketListDto).updateLocalStorage();
    }

    private initViewedProductsDto(): void {
        const viewedProductsStoreSubscription = this.viewedProductsStore
            .load()
            .subscribe((vp) => {
                this.viewedProductsDto = vp;
                viewedProductsStoreSubscription.unsubscribe();
            });
    }

    private initMarketListDto(): void {
        const marketListStoreSubscription = this.marketListStore
            .load()
            .subscribe((ml) => {
                this.marketListDto = ml;
                marketListStoreSubscription.unsubscribe();
            });
    }

    private updateViewedProductsDtoByButton(button: ISetViewedProductsButton): void {
        this.viewedProductsDto.forEach((dto) => {
            dto.isSelected = button.isSelected;
            dto.isPending = button.isPending;
        });
    }

    private updateMarketListDtoByButton(button: ISetViewedProductsButton): void {
        this.viewedProductsDto.forEach((dto) => {
            const i = this.findMarketListProductIndexById(this.marketListDto.products, dto.id);
            this.marketListDto.products[i].isSelected = button.isSelected;
            this.marketListDto.products[i].isPending = button.isPending;
        });
    }

    private findMarketListProductIndexById(products: Product[], id: string): number {
        return products.findIndex((p) => p.id === id);
    }
}