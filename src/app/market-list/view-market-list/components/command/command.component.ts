import { Component } from "@angular/core";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html'
})
export class CommandComponent {
  public faFileArrowDown = faFileArrowDown;
  public isAddProductModalOpen = false;

  public toggleIsAddProductModal(state: boolean) {
    this.isAddProductModalOpen = state;
  }  
}
