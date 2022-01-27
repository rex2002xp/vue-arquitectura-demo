import { Id } from './id';
import { Link } from './link';

export interface ILinkRepository {
  findAll(): Promise<Link[]>;
  update(id: Id, link: Partial<Link>): void;
  create(link: Link): void;
}
