import { TYPES } from '../types';
import { ILinkRepository, Link } from './domain';
import { Container } from '../container';

export class LinkService {
  private static _instance: LinkService;
  private _links: Link[] = [];

  static instance() {
    if (this._instance === undefined) {
      LinkService._instance = new LinkService();
    }
    return this._instance;
  }

  public getRepository(): ILinkRepository {
    return Container.instance().get<ILinkRepository>(TYPES.LINK_REPOSITORY);
  }

  public getEmptyLinks(): Link[] {
    return this._links;
  }
}
