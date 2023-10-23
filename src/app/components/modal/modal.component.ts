import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Modal } from "./modal.model";
import { ModalService } from "./modal.service";
import { ModalDirective } from "./modal.directive";
import { Subscription } from "rxjs";
import { isObjectEmpty } from "src/app/shared/utils/object.utils";
import { isUndefined } from "src/app/shared/utils/check-undefined.utils";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit, OnDestroy {

  protected modal!: Modal;
  protected hasModalBody: boolean = false;
  private modalServiceSubscription!: Subscription;

  @ViewChild(ModalDirective, { static: true }) modalHost!: ModalDirective;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.loadComponent();
  }

  ngOnDestroy(): void {
    this.modalServiceSubscription.unsubscribe();
  }

  public loadComponent() {
    this.modalServiceSubscription = this.modalService
      .load()
      .subscribe((m) => {
        console.log('loading modal');

        this.modal = m;

        if (isObjectEmpty(m)) {
          this.hasModalBody = false;
          return;
        }
        this.hasModalBody = true;
        
        console.log(this.modalHost)
        console.log(m.component)

        if (!isUndefined(this.modalHost) && isUndefined(m.component)) {
          const viewContainerRef = this.modalHost.viewContainerRef;
          viewContainerRef.clear();
          viewContainerRef.createComponent<ModalComponent>(m.component!);
        }
      });

      console.log(this.modalHost)

      
  }

  protected removeModal() {
    this.modalService.clearState();
  }
}