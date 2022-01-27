import { IContext, ILink, EmptyLink } from 'src/core/links';

export abstract class BaseLink {
  nextLink: ILink = new EmptyLink()

  setNext(link: ILink): ILink {
    this.nextLink = link
    return this
  }

  abstract next(context: IContext): void
}
