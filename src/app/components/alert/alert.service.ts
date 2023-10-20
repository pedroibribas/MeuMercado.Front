import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Alert, AlertType } from "./alert.model";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<Alert>();

  public onAlert(): Observable<Alert> {
    return this.subject.asObservable();
  }
  
  public success(message: string) {
    this.subject
      .next(new Alert({
        type: AlertType.Success,
        message
      }));
  }
}