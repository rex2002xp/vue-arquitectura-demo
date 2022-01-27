import { container } from 'inversify-props'
import { TYPES } from 'src/demo-src/types';
import { Runner } from 'src/demo-src/domain/links/runner';

export abstract class UseCase<Result = void, Param = void> {
  abstract readonly: boolean;
  abstract internalExecute(param: Param): Result;

  execute(param: Param): Result {
    return container.get<Runner>(TYPES.RUNNER).run(this, param) as Result;
  }
}
