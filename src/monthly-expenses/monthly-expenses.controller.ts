import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MonthlyExpensesService } from './monthly-expenses.service';
import { CreateMonthlyExpenseDto } from './dto/create-monthly-expense.dto';
import { UpdateMonthlyExpenseDto } from './dto/update-monthly-expense.dto';
import { Guid } from 'guid-typescript'
import { MonthlyExpense } from './monthly-expense.entity';

@Controller('monthly-expenses')
export class MonthlyExpensesController {
  constructor(private readonly monthlyExpensesService: MonthlyExpensesService) {}

  @Post()
  async create(@Body() createMonthlyExpenseDto: CreateMonthlyExpenseDto): Promise<MonthlyExpense> {
    return this.monthlyExpensesService.create(createMonthlyExpenseDto);
  }

  @Get()
  async findAll(): Promise<MonthlyExpense[]> {
    return this.monthlyExpensesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: Guid): Promise<MonthlyExpense> {
    return this.monthlyExpensesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: Guid, @Body() updateMonthlyExpenseDto: UpdateMonthlyExpenseDto): Promise<MonthlyExpense> {
    return this.monthlyExpensesService.update(id, updateMonthlyExpenseDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Guid): Promise<void> {
    return this.monthlyExpensesService.remove(id);
  }
}
