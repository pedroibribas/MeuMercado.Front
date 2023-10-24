import { Directive, ViewContainerRef } from '@angular/core';
import { IViewContainerRef } from 'src/app/shared/models/view-container-ref';

@Directive({
  selector: '[modalHost]'
})
export class ModalDirective implements IViewContainerRef{

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }
}