import { Module } from '@nestjs/common';
import { FinancialAssetsService } from './financial-assets.service';
import { FinancialAssetsController } from './financial-assets.controller';

@Module({
  controllers: [FinancialAssetsController],
  providers: [FinancialAssetsService]
})
export class FinancialAssetsModule {}
