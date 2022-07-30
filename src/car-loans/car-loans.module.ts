import { Module } from '@nestjs/common';
import { CarLoansService } from './car-loans.service';
import { CarLoansController } from './car-loans.controller';

@Module({
  controllers: [CarLoansController],
  providers: [CarLoansService]
})
export class CarLoansModule {}
