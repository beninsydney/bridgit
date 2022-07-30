import { Module } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';
import { applicationsProviders } from './application.provider';

@Module({
  controllers: [ApplicationsController],
  providers: [ApplicationsService, ...applicationsProviders]
})
export class ApplicationsModule {}
