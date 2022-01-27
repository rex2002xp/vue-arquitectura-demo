import { Inject, Injectable } from '../di';
import { TYPES } from '../types';
import { ILogger } from '../use-cases/i-logger';

@Injectable()
export class ConsoleLogger implements ILogger {
  constructor(@Inject(TYPES.WINDOW) private readonly browserWindow: Window) {}

  object<T>(object: T): void {
    this.browserWindow.window.console.dir(object);
  }

  groupEnd(): void {
    this.browserWindow.window.console.groupEnd();
  }

  info(message: string): void {
    this.browserWindow.window.console.info(message);
  }

  group(label: string): void {
    this.browserWindow.window.console.group(label);
  }

  log(message: string): void {
    this.browserWindow.window.console.log(message);
  }
}
