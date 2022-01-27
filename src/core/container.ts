import 'reflect-metadata';
import { interfaces } from 'inversify';
import { container } from 'inversify-props';
import { TYPES } from './types';
import {
  // EssentialLinkLocalRepository,
  EssentialLinkApiRepository,
  IEssentialLinkRepository,
  GetEssentialLinkAllQuery,
} from '../features/essential-link';
import { Runner } from './runner';
import { ExecutorLink, LoggerLink } from './links';
import { ILogger } from './use-cases/i-logger';
import { ConsoleLogger } from './infrastructure';

export class Container {
  private static _instance: Container | null = null;
  private readonly _container: interfaces.Container;

  private constructor() {
    container.bind<Window>(TYPES.WINDOW).toConstantValue(window);
    container.bind<ILogger>(TYPES.LOGGER).to(ConsoleLogger).inSingletonScope();
    container.bind<Runner>(TYPES.RUNNER).to(Runner).inSingletonScope();
    container
      .bind<ExecutorLink>(TYPES.EXECUTOR_LINK)
      .to(ExecutorLink)
      .inSingletonScope();
    container
      .bind<LoggerLink>(TYPES.LOGGER_LINK)
      .to(LoggerLink)
      .inSingletonScope();

    container
      .bind<string>(TYPES.BASE_URL_API)
      .toConstantValue(
        'https://e43702dd-bba8-4352-8be1-3f75df55086b.mock.pstmn.io'
      );
    container
      .bind<IEssentialLinkRepository>(TYPES.ESSENTIAL_LINK_REPOSITORY)
      //.to(EssentialLinkLocalRepository)
      .to(EssentialLinkApiRepository)
      .inSingletonScope();
    container
      .bind<GetEssentialLinkAllQuery>(TYPES.ESSENTIAL_LINK_GET_ALL_QUERY)
      .to(GetEssentialLinkAllQuery)
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
