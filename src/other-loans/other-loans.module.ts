import { Module } from '@nestjs/common';
import { OtherLoansService } from './other-loans.service';
import { OtherLoansController } from './other-loans.controller';
import { otherLoansProviders } from './other-loan.provider';

@Module({
  controllers: [OtherLoansController],
  providers: [OtherLoansService, ...otherLoansProviders]
})
export class OtherLoansModule {}
