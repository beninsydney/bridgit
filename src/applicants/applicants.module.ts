import { Module } from '@nestjs/common';
import { ApplicantsService } from './applicants.service';
import { ApplicantsController } from './applicants.controller';
import { applicantsProviders } from './applicant.provider';

@Module({
  controllers: [ApplicantsController],
  providers: [ApplicantsService, ...applicantsProviders]
})
export class ApplicantsModule {}
