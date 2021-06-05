import { BehaviorSubject } from 'rxjs';

class BehaviorSubjectSvelteStore<T> extends BehaviorSubject<T> {
  constructor(_value: T) {
    super(_value);
  }
  set(_value: T): void {
    this.next(_value);
  }
}

export { BehaviorSubjectSvelteStore };
