import { Type } from "@angular/core";
import { IViewContainerRef } from "../models/view-container-ref";
import { isUndefined } from "./check-undefined.utils";

export function createHostView<T>(container: IViewContainerRef, component: Type<any>) {

    if (isUndefined(container))
      throw new Error('Erro ao carregar componente dinâmico: valor de IViewContainerRef indefinido.');
  
    container.viewContainerRef.clear();
    container.viewContainerRef.createComponent<T>(component);
  }