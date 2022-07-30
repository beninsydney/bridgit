import { Module } from '@nestjs/common';
import { LiabilitiesService } from './liabilities.service';
import { LiabilitiesController } from './liabilities.controller';

@Module({
  controllers: [LiabilitiesController],
  providers: [LiabilitiesService]
})
export class LiabilitiesModule {}
