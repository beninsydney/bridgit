import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MonthlyExpensesService } from './monthly-expenses.service';
import { CreateMonthlyExpenseDto } from './dto/create-monthly-expense.dto';
import { UpdateMonthlyExpenseDto } from './dto/update-monthly-expense.dto';
import { Guid } from 'guid-typescript'

@Controller('monthly-expenses')
export class MonthlyExpensesController {
  constructor(private readonly monthlyExpensesService: MonthlyExpensesService) {}

  @Post()
  create(@Body() createMonthlyExpenseDto: CreateMonthlyExpenseDto) {
    return this.monthlyExpensesService.create(createMonthlyExpenseDto);
  }

  @Get()
  findAll() {
    return this.monthlyExpensesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Guid) {
    return this.monthlyExpensesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: Guid, @Body() updateMonthlyExpenseDto: UpdateMonthlyExpenseDto) {
    return this.monthlyExpensesService.update(id, updateMonthlyExpenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Guid) {
    return this.monthlyExpensesService.remove(id);
  }
}
