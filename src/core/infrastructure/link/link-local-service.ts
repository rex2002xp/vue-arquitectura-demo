import { Injectable } from 'src/core/domain/di/injectable';
import { Link } from 'src/core/domain/link/link';

@Injectable()
export class LinkLocalService {

    private _links: Link[];

    constructor() {
        this._links = [];
    }
    
}