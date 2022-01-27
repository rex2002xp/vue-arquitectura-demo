import { IContext } from './i-context';

export interface ILink {
  setNext(link: ILink): ILink
  next(context: IContext): void
}
