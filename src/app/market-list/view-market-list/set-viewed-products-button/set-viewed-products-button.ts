import { ESetViewedProductsButton } from "./set-viewed-products-button.enum";

export const SetViewedProductsButton = {

    [ESetViewedProductsButton.selectAllViewedProducts]: {
        title: 'Marcar todos',
        isSelected: true,
        isPending: true
    },

    [ESetViewedProductsButton.unselectAllViewedProducts]: {
        title: 'Desmarcar todos',
        isSelected: false,
        isPending: true
    }
    
};
