import { Component, EventEmitter, Input, Output } from "@angular/core";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-product-selection-button',
  templateUrl: './product-selection-button.component.html'
})
export class ProductSelectionButtonComponent {
  faSquare = faSquare;
  faSquareCheck = faSquareCheck;
  @Input({ required: true })
    isProductSelected = false;

  @Output()
    newIsProductSelectedEvent = new EventEmitter();

  public toggleIsProductSelected(): void {
    this.isProductSelected = !this.isProductSelected;
    this.newIsProductSelectedEvent.emit();
  }
}
