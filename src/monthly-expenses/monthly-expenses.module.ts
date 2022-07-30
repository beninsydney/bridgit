import { Module } from '@nestjs/common';
import { MonthlyExpensesService } from './monthly-expenses.service';
import { MonthlyExpensesController } from './monthly-expenses.controller';
import { monthlyExpensesProviders } from './monthly-expenses.provider';
import { DatabaseModule } from '../database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MonthlyExpensesController],
  providers: [MonthlyExpensesService, ...monthlyExpensesProviders]
})
export class MonthlyExpensesModule {}
