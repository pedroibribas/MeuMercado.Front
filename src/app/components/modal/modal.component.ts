import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Modal } from "./modal.model";
import { ModalService } from "./modal.service";
import { ModalDirective } from "./modal.directive";
import { Subscription } from "rxjs";
import { isObjectEmpty } from "src/app/shared/utils/object.utils";
import { isUndefined } from "src/app/shared/utils/check-undefined.utils";
import { createHostView } from "src/app/shared/utils/create-host-view.utils";


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit, OnDestroy {

  protected modal!: Modal;
  private modalServiceSubscription!: Subscription;
  protected modalClassesStr: string = 'modal bg-black bg-opacity-10 z-3 fade';

  @ViewChild(ModalDirective, { static: true }) modalHost!: ModalDirective;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.modalServiceSubscription = this.modalService
      .load()
      .subscribe((m) => {
        this.setModal(m);
        this.loadDynamicTemplate();
        this.toggleModalByCss();
      });
  }

  ngOnDestroy(): void {
    this.modalServiceSubscription.unsubscribe();
  }

  protected removeModal() {
    this.modalService.clearState();
  }

  private setModal(v: Modal) {
    this.modal = v;
  }

  private toggleModalByCss(): string {
    return isObjectEmpty(this.modal)
      ? this.modalClassesStr = 'modal bg-black bg-opacity-10 z-3 fade'
      : this.modalClassesStr += ' d-block show';
  }

  private loadDynamicTemplate() {
    try {
      if (!isUndefined(this.modal.component))
        createHostView<ModalComponent>(this.modalHost, this.modal.component!);
    } catch (error) {
      console.error(error);
    }
  }
}