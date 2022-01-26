import { TYPES } from '../types';
import { ILinkRepository } from './domain';
import { Container } from '../container';

export class Link {
  private static _instance: Link;

  static instance() {
    if (this._instance === undefined) {
      Link._instance = new Link();
    }
    return this._instance.getRepository();
  }

  public getRepository(): ILinkRepository {
    return Container.instance().get<ILinkRepository>(TYPES.LINK_REPOSITORY);
  }
}
