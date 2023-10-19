export class Alert {
  public type?: AlertType;
  public message?: string;

  constructor(init?: Alert) {
    Object.assign(this, init);
  }
}

export enum AlertType {
  Success,
  Error,
  Warning,
  Info
}