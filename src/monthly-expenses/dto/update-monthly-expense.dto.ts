import { PartialType } from '@nestjs/mapped-types';
import { CreateMonthlyExpenseDto } from './create-monthly-expense.dto';

export class UpdateMonthlyExpenseDto extends PartialType(CreateMonthlyExpenseDto) {}
