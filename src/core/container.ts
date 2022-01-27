import 'reflect-metadata';
import { interfaces } from 'inversify';
import { container } from 'inversify-props';
import { TYPES } from './types';
import { ILinkRepository } from './link/domain';
//import { LinkLocalRepository } from './link/infrastructure';
import { LinkApiRepository } from './link/infrastructure';
export class Container {
  private static _instance: Container | null = null;
  private readonly _container: interfaces.Container;

  private constructor() {
    container
      .bind<string>(TYPES.BASE_URL_API)
      .toConstantValue(
        'https://e43702dd-bba8-4352-8be1-3f75df55086b.mock.pstmn.io'
      );
    container
      .bind<ILinkRepository>(TYPES.LINK_REPOSITORY)
      //.to(LinkLocalRepository)
      .to(LinkApiRepository)
      .inSingletonScope();
    this._container = container;
  }

  static instance() {
    if (this._instance === null) {
      Container._instance = new Container();
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this._instance!._container;
  }
}
