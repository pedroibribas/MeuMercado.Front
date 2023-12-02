import { BehaviorSubject, Observable } from "rxjs";

export class BaseStoreService<T> {

  private subject: BehaviorSubject<T>;
  private initialState: T;

  constructor(initialState: T) {
    this.subject = new BehaviorSubject<T>(initialState);
    this.initialState = initialState;
  }

  protected get subjectValue(): T { return this.subject.value };

  public load(): Observable<T> {
    return this.subject.asObservable();
  }

  public setState(s: T): this {
    this.subject.next(s);
    return this;
  }

  /**
   * Reseta o valor do BehaviorSubject<T> para o estado inicial.
   * @returns Call-chain.
   */
  public clearState(): this {
    this.subject.next(this.initialState);
    return this;
  }
}