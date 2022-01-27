import { Injectable } from 'src/core/di';
import { BaseLink } from 'src/core/links/base-link';
import { IContext } from 'src/core/links/i-context';

@Injectable()
export class ExecutorLink extends BaseLink {
  next(context: IContext) {
    context.result = context.useCase.internalExecute(context.param)
    this.nextLink.next(context)
  }
}
