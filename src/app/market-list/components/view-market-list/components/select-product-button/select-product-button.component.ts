import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-select-product-button',
  templateUrl: './select-product-button.component.html'
})
export class SelectProductButtonComponent {
  @Input({ required: true }) isProductSelected!: boolean;
  @Output() newIsProductSelectedEvent = new EventEmitter();

  public toggleProductSelection(): void {
    this.isProductSelected = !this.isProductSelected;
    this.newIsProductSelectedEvent.emit();
  }
}
