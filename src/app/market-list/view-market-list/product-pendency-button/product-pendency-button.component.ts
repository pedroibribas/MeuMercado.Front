import { Component, EventEmitter, Input, Output } from "@angular/core";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-product-pendency-button',
  templateUrl: './product-pendency-button.component.html'
})
export class ProductPendencyButtonComponent {
  faSquare = faSquare;
  faSquareCheck = faSquareCheck;  
  @Input({ required: true })
    isProductPending!: boolean;
  @Output() 
    newIsProductPendingEvent = new EventEmitter();

  public toggleProductPendency(): void {
    this.isProductPending = !this.isProductPending;
    this.newIsProductPendingEvent.emit();
  }
}
