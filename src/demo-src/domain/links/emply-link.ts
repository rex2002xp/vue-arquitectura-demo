import { Injectable } from '../di';
import { ILink } from './i-link';


@Injectable()
export class EmptyLink implements ILink {
  setNext(): ILink {
    return this
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  next(): void {}
}
