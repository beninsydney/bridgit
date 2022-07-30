import { Module } from '@nestjs/common';
import { IncomePaymentsService } from './income-payments.service';
import { IncomePaymentsController } from './income-payments.controller';
import { incomePaymentProviders } from './income-payment.provider';

@Module({
  controllers: [IncomePaymentsController],
  providers: [IncomePaymentsService, ...incomePaymentProviders]
})
export class IncomePaymentsModule {}
