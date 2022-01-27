import { Injectable } from '../di/injectable';
import { Inject } from 'src/demo-src/domain/di';
import { TYPES } from 'src/demo-src/types';
import { ExecutorLink } from 'src/demo-src/domain/links/execute-link';
import { LoggerLink } from 'src/demo-src/domain/links/logger-link';
import { UseCase } from 'src/demo-src/domain/use-cases/use-case';

@Injectable()
export class  Runner {
  chain = this.executorLink.setNext(this.loggerLink);

  constructor(
    @Inject(TYPES.EXECUTOR_LINK) private readonly executorLink: ExecutorLink,
    @Inject(TYPES.LOGGER_LINK) private readonly loggerLink: LoggerLink
  ) {}

  run(useCase: UseCase<unknown, unknown>, param: unknown): unknown {
    const context = { useCase, result: undefined, param };
    this.chain.next(context);
    return context.result;
  }
}


