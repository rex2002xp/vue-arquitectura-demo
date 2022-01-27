import { Inject, Injectable } from 'src/core/di';
import { TYPES } from 'src/core/types';
import { Query } from 'src/core/use-cases/query';
import {
  IEssentialLinkRepository,
  IEssentialLink,
} from 'src/features/essential-link/domain';

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
