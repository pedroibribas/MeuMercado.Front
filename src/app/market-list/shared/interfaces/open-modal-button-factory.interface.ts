import { Type } from "@angular/core"
import { EModalType } from "../enums/modal-type.enum"

export interface IOpenModalButtonFactory {
    [EModalType.addProductForm]: IOpenModalButton
}

interface IOpenModalButton {
    btnName: string;
    title: string;
    component: Type<any>;
}