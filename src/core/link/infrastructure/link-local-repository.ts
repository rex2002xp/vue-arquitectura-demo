import { Injectable } from 'src/core/di';
import { Link, ILinkRepository } from 'src/core/link/domain';
import * as uuid from 'uuid';
@Injectable()
export class LinkLocalRepository implements ILinkRepository {
  private _links: Link[];
  private _generateId(): string {
    return uuid.v4();
  }

  constructor() {
    this._links = [
      {
        id: '47fd6096-5e7f-4b3f-9c45-256b9c8157d4',
        title: 'Docs',
        caption: 'quasar.dev',
        icon: 'school',
        link: 'https://quasar.dev',
      },
      {
        id: '14a35cdd-c0ce-43e0-875c-b295c0e06ccb',
        title: 'Github',
        caption: 'github.com/quasarframework',
        icon: 'code',
        link: 'https://github.com/quasarframework',
      },
      {
        id: '9cf59006-93e7-4998-a5fa-52c4fd6e9c70',
        title: 'Discord Chat Channel',
        caption: 'chat.quasar.dev',
        icon: 'chat',
        link: 'https://chat.quasar.dev',
      },
      {
        id: 'a3517a15-4471-4083-bddf-fefff0d44a83',
        title: 'Forum',
        caption: 'forum.quasar.dev',
        icon: 'record_voice_over',
        link: 'https://forum.quasar.dev',
      },
      {
        id: 'cc28adc6-9964-480f-b009-296fdbcd3f00',
        title: 'Twitter',
        caption: '@quasarframework',
        icon: 'rss_feed',
        link: 'https://twitter.quasar.dev',
      },
      {
        id: 'f6c89dd1-2574-468a-b177-34d72fe2836d',
        title: 'Facebook',
        caption: '@QuasarFramework',
        icon: 'public',
        link: 'https://facebook.quasar.dev',
      },
      {
        id: '2630388b-f09b-4664-8962-c2e1b4faa713',
        title: 'Quasar Awesome',
        caption: 'Community Quasar projects',
        icon: 'favorite',
        link: 'https://awesome.quasar.dev',
      },
    ];
  }

  async findAll(): Promise<Link[]> {
    return new Promise((resolve) => {
      resolve(
        this._links.filter(
          (x) => x.id === '2630388b-f09b-4664-8962-c2e1b4faa713'
        )
      );
    });
  }
  update(id: string, link: Partial<Link>): void {
    const index = this._links.findIndex((l) => l.id === id);
    if (index !== -1) {
      this._links[index] = {
        ...this._links[index],
        ...link,
      };
    }
  }
  create(link: Link): void {
    link.id = this._generateId();
    this._links.push(link);
  }
}
