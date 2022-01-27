import { Inject, Injectable } from 'src/demo-src/domain/di';
import { TYPES } from 'src/demo-src/types';
import { Query } from 'src/demo-src/domain/use-cases/query';
import {
  IEssentialLinkRepository,
  IEssentialLink,
} from 'src/demo-src/features/essential-link/domain';

@Injectable()
export class GetEssentialLinkAllQuery extends Query<Promise<IEssentialLink[]>> {
  constructor(
    @Inject(TYPES.ESSENTIAL_LINK_REPOSITORY)
    private readonly linkRepository: IEssentialLinkRepository
  ) {
    super();
  }

  async internalExecute(): Promise<IEssentialLink[]> {
    return this.linkRepository.findAll();
  }
}
