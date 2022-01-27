import { UseCase } from 'src/demo-src/domain/use-cases/use-case';

export abstract class Query<Result = void, Param = void> extends UseCase<Result, Param> {
  readonly = true
}
