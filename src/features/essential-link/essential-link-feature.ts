import { TYPES } from '../../core/types';
import { IEssentialLink } from './domain';
import { Container } from '../../core/container';
import { GetEssentialLinkAllQuery } from '.';

export class EssentialLinkFeature {
  private static _instance: EssentialLinkFeature;
  private _links: IEssentialLink[] = [];

  static instance() {
    if (this._instance === undefined) {
      EssentialLinkFeature._instance = new EssentialLinkFeature();
    }
    return this._instance;
  }

  public GetAllQuery(): GetEssentialLinkAllQuery {
    return Container.instance().get<GetEssentialLinkAllQuery>(
      TYPES.ESSENTIAL_LINK_GET_ALL_QUERY
    );
  }

  public getEmptyLinks(): IEssentialLink[] {
    return this._links;
  }
}
