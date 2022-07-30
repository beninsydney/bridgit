import { Module } from '@nestjs/common';
import { LiabilitiesService } from './liabilities.service';
import { LiabilitiesController } from './liabilities.controller';
import { liabilitiesProviders } from './liabilities.provider';

@Module({
  controllers: [LiabilitiesController],
  providers: [LiabilitiesService, ...liabilitiesProviders]
})
export class LiabilitiesModule {}
