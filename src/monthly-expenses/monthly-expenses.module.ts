import { Module } from '@nestjs/common';
import { MonthlyExpensesService } from './monthly-expenses.service';
import { MonthlyExpensesController } from './monthly-expenses.controller';

@Module({
  controllers: [MonthlyExpensesController],
  providers: [MonthlyExpensesService]
})
export class MonthlyExpensesModule {}
