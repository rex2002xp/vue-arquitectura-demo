import { Inject, Injectable } from 'src/core/di';
import { TYPES } from 'src/core/types';
import { BaseLink } from 'src/core/links/base-link';
import { IContext } from 'src/core/links/i-context';
import { ILogger} from 'src/core/use-cases/i-logger'

@Injectable()
export class LoggerLink extends BaseLink {

  constructor(@Inject(TYPES.LOGGER) private readonly logger: ILogger) {
    super();
  }

  next(context: IContext): void {
    this.logger.group(context.useCase.constructor.name);
    this.logger.group('Parameters');
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    this.logger.log(`${context.param ?? '-'}`);
    this.logger.groupEnd();
    this.logger.group('Result');
    this.logger.object(context.result ?? '-');
    this.logger.groupEnd();
    this.logger.groupEnd();
    this.nextLink.next(context);
  }
}
