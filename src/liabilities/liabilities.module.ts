import { Module } from '@nestjs/common';
import { LiabilitiesService } from './liabilities.service';
import { LiabilitiesController } from './liabilities.controller';
import { liabilitiesProviders } from './liabilities.provider';
import { DatabaseModule } from '../database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LiabilitiesController],
  providers: [LiabilitiesService, ...liabilitiesProviders]
})
export class LiabilitiesModule {}
