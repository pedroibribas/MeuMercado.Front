import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Modal } from "./modal.model";
import { ModalService } from "./modal.service";
import { ModalDirective } from "./modal.directive";
import { Subscription } from "rxjs";
import { isObjectEmpty } from "src/app/shared/utils/object.utils";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit, OnDestroy {

  protected modal!: Modal;
  protected hasModalBody: boolean = false;
  private modalServiceSubscription!: Subscription;

  @ViewChild(ModalDirective, { static: true })
    modalHost!: ModalDirective;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.loadComponent();
  }

  ngOnDestroy(): void {
    this.modalServiceSubscription.unsubscribe();
  }

  private loadComponent() {
    this.modalServiceSubscription = this.modalService
      .load()
      .subscribe((m) => {

      if (isObjectEmpty(m))
        return;
        
      this.modal = m;
      this.hasModalBody = true;
      const viewContainerRef = this.modalHost.viewContainerRef;
      viewContainerRef.clear();    
      if (typeof m.component !== 'undefined') {
        viewContainerRef.createComponent<ModalComponent>(m.component);
      }
      });

  }

  protected removeModal() {
    this.modal = {} as Modal;
  }
}