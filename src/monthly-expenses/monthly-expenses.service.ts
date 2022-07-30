import { Injectable, Inject } from '@nestjs/common';
import { CreateMonthlyExpenseDto } from './dto/create-monthly-expense.dto';
import { UpdateMonthlyExpenseDto } from './dto/update-monthly-expense.dto';
import { MonthlyExpense } from './monthly-expense.entity';

@Injectable()
export class MonthlyExpensesService {
  constructor(
    @Inject('MONTHLY_EXPENSES_REPOSITORY')
    private model: typeof MonthlyExpense
  ) {}

  async create(createMonthlyExpenseDto: CreateMonthlyExpenseDto): Promise<MonthlyExpense> {
    const object = new MonthlyExpense()
    for (const field in createMonthlyExpenseDto) {
      object[field] = createMonthlyExpenseDto[field]
    }
    return object.save()
  }

  async findAll(): Promise<MonthlyExpense[]> {
    return this.model.findAll<MonthlyExpense>()
  }

  async findOne(id: number): Promise<MonthlyExpense> {
    return this.model.findOne<MonthlyExpense>({
      where: {
        id
      }
    })
  }

  async update(id: number, updateMonthlyExpenseDto: UpdateMonthlyExpenseDto): Promise<MonthlyExpense> {
    const object = await this.model.findOne({
      where: {
        id
      }
    })
    return await object.update(updateMonthlyExpenseDto)
  }

  async remove(id: number): Promise<void> {
    await this.model.destroy({
      where: {
        id
      }
    })
  }
}