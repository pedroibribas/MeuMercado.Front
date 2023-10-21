import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-toggle-product-pendency-button',
  templateUrl: './toggle-product-pendency-button.component.html'
})
export class ToggleProductPendencyButtonComponent {
  @Input({ required: true }) isProductPending!: boolean;
  @Output() newIsProductPendingEvent = new EventEmitter();

  public toggleProductPendency(): void {
    this.isProductPending = !this.isProductPending;
    this.newIsProductPendingEvent.emit();
  }
}
