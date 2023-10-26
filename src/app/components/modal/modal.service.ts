import { Injectable } from "@angular/core";
import { Modal } from "./modal.model";
import { BaseStoreService } from "src/app/shared/services/base/base-store.service";

@Injectable({
  providedIn: 'root'
})
export class ModalService extends BaseStoreService<Modal> {
  
  constructor() {
    super({} as Modal);
  }
}