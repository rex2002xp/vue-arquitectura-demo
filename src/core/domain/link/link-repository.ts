
import { Id } from './id';
import { Link } from './link';

export interface LinkRepository {
    findAll(): Link[]
    update(id: Id, link: Partial<Link>): void
    create(link: Link): void
}