import { Module } from '@nestjs/common';
import { IncomePaymentsService } from './income-payments.service';
import { IncomePaymentsController } from './income-payments.controller';

@Module({
  controllers: [IncomePaymentsController],
  providers: [IncomePaymentsService]
})
export class IncomePaymentsModule {}
