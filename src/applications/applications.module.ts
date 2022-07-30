import { Module } from '@nestjs/common'
import { ApplicationsService } from './applications.service'
import { ApplicationsController } from './applications.controller'
import { applicationsProviders } from './application.provider'
import { DatabaseModule } from '../database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [ApplicationsController],
  providers: [ApplicationsService, ...applicationsProviders]
})
export class ApplicationsModule {}
