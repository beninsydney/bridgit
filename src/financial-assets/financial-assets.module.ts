import { Module } from '@nestjs/common';
import { FinancialAssetsService } from './financial-assets.service';
import { FinancialAssetsController } from './financial-assets.controller';
import { financialAssetProviders } from './financial-asset.provider';
import { DatabaseModule } from '../database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FinancialAssetsController],
  providers: [FinancialAssetsService, ...financialAssetProviders]
})
export class FinancialAssetsModule {}
