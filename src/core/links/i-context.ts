import { UseCase } from 'src/core/use-cases/use-case';

export interface IContext {
  result: unknown
  param: unknown
  useCase: UseCase<unknown, unknown>
}
