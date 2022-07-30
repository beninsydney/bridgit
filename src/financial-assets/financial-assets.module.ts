import { Module } from '@nestjs/common';
import { FinancialAssetsService } from './financial-assets.service';
import { FinancialAssetsController } from './financial-assets.controller';
import { financialAssetProviders } from './financial-asset.provider';

@Module({
  controllers: [FinancialAssetsController],
  providers: [FinancialAssetsService, ...financialAssetProviders]
})
export class FinancialAssetsModule {}
