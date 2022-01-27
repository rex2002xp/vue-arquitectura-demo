import { UseCase } from 'src/demo-src/domain/use-cases/use-case';

export abstract class Command<Param = void> extends UseCase<void, Param> {
  readonly = false
}
