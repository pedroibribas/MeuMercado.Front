import { BehaviorSubject } from "rxjs";

export class StoreService<T> {
  private initialState: any;
  private subject: BehaviorSubject<T>;

  constructor(initialState: T) {
    this.initialState = initialState || {} as any;
    this.subject = new BehaviorSubject<T>(this.initialState);
  }

  protected get subjectValue(): T {
    return this.subject.value
  };

  public load() {
    return this.subject.asObservable();
  }

  public setState(s: T): this {
    this.subject.next(s);
    return this;
  }

  public clearState(): this {
    this.subject.next(this.initialState);
    return this;
  }
}