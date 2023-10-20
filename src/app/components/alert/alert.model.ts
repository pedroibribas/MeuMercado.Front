export class Alert {
  public type: AlertType;
  public message: string;

  constructor(init: Alert) {
    this.type = init.type;
    this.message = init.message;
  }
}

export enum AlertType {
  Success,
  Error,
  Warning,
  Info
}