import { UseCase } from 'src/demo-src/domain/use-cases/use-case';

export interface IContext {
  result: unknown
  param: unknown
  useCase: UseCase<unknown, unknown>
}
