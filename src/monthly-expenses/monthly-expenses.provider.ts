import { MonthlyExpense } from './monthly-expense.entity';

export const monthlyExpensesProviders = [
  {
    provide: 'MONTHLY_EXPENSES_REPOSITORY',
    useValue: MonthlyExpense
  }
];
