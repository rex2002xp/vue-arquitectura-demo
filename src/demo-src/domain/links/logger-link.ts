import { Inject, Injectable } from 'src/demo-src/domain/di';
import { TYPES } from 'src/demo-src/types';
import { BaseLink } from 'src/demo-src/domain/links/base-link';
import { IContext } from 'src/demo-src/domain/links/i-context';
import { ILogger} from 'src/demo-src/domain/use-cases/i-logger'

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
