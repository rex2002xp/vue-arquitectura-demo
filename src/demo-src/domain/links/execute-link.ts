import { Injectable } from 'src/demo-src/domain/di';
import { BaseLink } from 'src/demo-src/domain/links/base-link';
import { IContext } from 'src/demo-src/domain/links/i-context';

@Injectable()
export class ExecutorLink extends BaseLink {
  next(context: IContext) {
    context.result = context.useCase.internalExecute(context.param)
    this.nextLink.next(context)
  }
}
