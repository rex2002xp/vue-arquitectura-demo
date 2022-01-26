import { Link} from 'src/core/domain/link/link';
import { LinkRepository } from 'src/core/domain/link/link-repository';


export default class LinkApiRepository implements LinkRepository {

    findAll(): Link[] {
        throw new Error('Method not implemented.');
    }
    update(id: string, link: Partial<Link>): void {
        throw new Error('Method not implemented.');
    }
    create(link: Link): void {
        throw new Error('Method not implemented.');
    }
    
}