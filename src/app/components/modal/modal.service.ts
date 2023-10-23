import { Injectable } from "@angular/core";
import { Modal } from "./modal.model";
import { StoreService } from "src/app/shared/services/templates/store.service";

@Injectable({
  providedIn: 'root'
})
export class ModalService extends StoreService<Modal> {
  
  constructor() {
    super({} as Modal);
  }
}