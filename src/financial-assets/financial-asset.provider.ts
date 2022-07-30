import { FinancialAsset } from './financial-asset.entity';

export const financialAssetProviders = [
  {
    provide: 'FINANCIAL_ASSETS_REPOSITORY',
    useValue: FinancialAsset
  }
];
