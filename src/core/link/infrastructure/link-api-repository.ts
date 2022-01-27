import { Inject } from 'inversify-props';
import { Injectable } from 'src/core/di';
import { TYPES } from 'src/core/types';
import { ILinkRepository, Link } from '../domain';
import axios from 'axios';

@Injectable()
export class LinkApiRepository implements ILinkRepository {
  private _client;
  constructor(@Inject(TYPES.BASE_URL_API) private _url: string) {
    this._client = axios.create();
  }
  async findAll(): Promise<Link[]> {
    try {
      const response = await this._client.get(`${this._url}/api/v1/links`);
      return response.data as Link[];
    } catch (e) {
      throw e;
    }
  }
  update(id: string, link: Partial<Link>): void {
    console.log(id, link);
  }
  create(link: Link): void {
    console.log(link);
  }
}
