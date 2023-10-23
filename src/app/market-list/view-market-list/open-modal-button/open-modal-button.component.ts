import { Component, Input, OnInit, Type } from "@angular/core";
import { ModalService } from "src/app/components/modal/modal.service";
import { EModalType } from "../../shared/enums/modal-type.enum";
import { IOpenModalButtonFactory } from "../../shared/interfaces/open-modal-button-factory.interface";
import { openModalButtonComponent } from "../../shared/factories/open-modal-button.factory";

@Component({
  selector: 'app-open-modal-button',
  templateUrl: './open-modal-button.component.html'
})
export class OpenModalButtonComponent implements OnInit {    
  
  private componentFactory!: IOpenModalButtonFactory;
  protected btnName!: string;
  private modalTitle!: string;
  private modalBody!: Type<any>;

  @Input({ required: true })
    type!: EModalType;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.componentFactory = openModalButtonComponent;
    this.btnName = this.componentFactory[this.type].btnName;
    this.modalTitle = this.componentFactory[this.type].title;
    this.modalBody = this.componentFactory[this.type].component;
  }

  protected openModal() {
    this.modalService.setState({
      title: this.modalTitle,
      component: this.modalBody
    });
  }
}
