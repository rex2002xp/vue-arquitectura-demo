import { Inject } from 'inversify-props';
import { Injectable } from 'src/demo-src/domain/di';
import { TYPES } from 'src/demo-src/types';
import { IEssentialLinkRepository } from 'src/demo-src/features/essential-link';
import { IEssentialLink } from '../domain';
import axios, { Axios } from 'axios';

@Injectable()
export class EssentialLinkApiRepository implements IEssentialLinkRepository {
  private _client: Axios;
  constructor(@Inject(TYPES.BASE_URL_API) private _url: string) {
    this._client = axios.create();
  }
  async findAll(): Promise<IEssentialLink[]> {
    try {
      const response = await this._client.get(`${this._url}/api/v1/links`);
      return response.data as IEssentialLink[];
    } catch (e) {
      throw e;
    }
  }
  update(id: string, link: Partial<IEssentialLink>): void {
    console.log(id, link);
  }
  create(link: IEssentialLink): void {
    console.log(link);
  }
}
