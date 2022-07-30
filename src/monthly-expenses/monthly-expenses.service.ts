import { Injectable } from '@nestjs/common';
import { CreateMonthlyExpenseDto } from './dto/create-monthly-expense.dto';
import { UpdateMonthlyExpenseDto } from './dto/update-monthly-expense.dto';

@Injectable()
export class MonthlyExpensesService {
  create(createMonthlyExpenseDto: CreateMonthlyExpenseDto) {
    return 'This action adds a new monthlyExpense';
  }

  findAll() {
    return `This action returns all monthlyExpenses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} monthlyExpense`;
  }

  update(id: number, updateMonthlyExpenseDto: UpdateMonthlyExpenseDto) {
    return `This action updates a #${id} monthlyExpense`;
  }

  remove(id: number) {
    return `This action removes a #${id} monthlyExpense`;
  }
}
