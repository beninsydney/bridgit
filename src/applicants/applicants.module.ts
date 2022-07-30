import { Module } from '@nestjs/common'
import { ApplicantsService } from './applicants.service'
import { ApplicantsController } from './applicants.controller'
import { applicantsProviders } from './applicant.provider'
import { DatabaseModule } from '../database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [ApplicantsController],
  providers: [ApplicantsService, ...applicantsProviders]
})
export class ApplicantsModule {}
