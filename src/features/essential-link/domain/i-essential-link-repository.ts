import { Id } from './id';
import { IEssentialLink } from './i-essential-link';

export interface IEssentialLinkRepository {
  findAll(): Promise<IEssentialLink[]>;
  update(id: Id, link: Partial<IEssentialLink>): void;
  create(link: IEssentialLink): void;
}
