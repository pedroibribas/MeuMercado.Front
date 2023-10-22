import { BehaviorSubject } from "rxjs";

export class StoreService<T> {
  private initialState: any;
  private subject: BehaviorSubject<T>;

  constructor(initialState: T) {
    this.initialState = initialState || {} as any;
    this.subject = new BehaviorSubject<T>(this.initialState);
  }

  private get subjectValue(): T {
    return this.subject.value
  };

  public getState() {
    return this.subject.asObservable();
  }

  public setState(s: T): void {
    this.subject.next(s);
  }

  public clearState() {
    this.subject.next(this.initialState);
  }
}