import { AddProductFormComponent } from "../../add-product-form/add-product-form.component";
import { EModalType } from "../enums/modal-type.enum";
import { IOpenModalButtonFactory } from "../interfaces/open-modal-button-factory.interface";


export const openModalButtonFactory: IOpenModalButtonFactory = {

    [EModalType.addProductForm]: {
        btnName: '+Produto',
        title: 'Adicione um novo produto',
        component: AddProductFormComponent
    }
    
}