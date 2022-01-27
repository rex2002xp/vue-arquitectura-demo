import { UseCase } from 'src/core/use-cases/use-case';

export abstract class Command<Param = void> extends UseCase<void, Param> {
  readonly = false
}
