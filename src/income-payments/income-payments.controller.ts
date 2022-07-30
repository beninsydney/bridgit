import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IncomePaymentsService } from './income-payments.service';
import { CreateIncomePaymentDto } from './dto/create-income-payment.dto';
import { UpdateIncomePaymentDto } from './dto/update-income-payment.dto';

@Controller('income-payments')
export class IncomePaymentsController {
  constructor(private readonly incomePaymentsService: IncomePaymentsService) {}

  @Post()
  create(@Body() createIncomePaymentDto: CreateIncomePaymentDto) {
    return this.incomePaymentsService.create(createIncomePaymentDto);
  }

  @Get()
  findAll() {
    return this.incomePaymentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incomePaymentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIncomePaymentDto: UpdateIncomePaymentDto) {
    return this.incomePaymentsService.update(+id, updateIncomePaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incomePaymentsService.remove(+id);
  }
}
