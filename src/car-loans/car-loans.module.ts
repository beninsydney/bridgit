import { Module } from '@nestjs/common';
import { CarLoansService } from './car-loans.service';
import { CarLoansController } from './car-loans.controller';
import { carLoanProviders } from './car-loan.provider';

@Module({
  controllers: [CarLoansController],
  providers: [CarLoansService, ...carLoanProviders]
})
export class CarLoansModule {}
