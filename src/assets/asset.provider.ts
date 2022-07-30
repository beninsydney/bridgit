import { Asset } from './asset.entity';

export const assetsProviders = [
  {
    provide: 'ASSETS_REPOSITORY',
    useValue: Asset
  }
];
