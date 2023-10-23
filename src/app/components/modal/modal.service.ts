import { Injectable, Type } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Modal } from "./modal.model";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private subject = new BehaviorSubject<Modal>({} as Modal);

  public load(): Observable<Modal> {
    return this.subject.asObservable();
  }
  
  public newModal(title: string, component: Type<any>) {
    this.subject.next(new Modal({
        title,
        component
      }));
  }
}