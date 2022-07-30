import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IncomePaymentsService } from './income-payments.service';
import { CreateIncomePaymentDto } from './dto/create-income-payment.dto';
import { UpdateIncomePaymentDto } from './dto/update-income-payment.dto';
import { Guid } from 'guid-typescript'
import { IncomePayment } from './income-payment.entity';

@Controller('income-payments')
export class IncomePaymentsController {
  constructor(private readonly incomePaymentsService: IncomePaymentsService) {}

  @Post()
  async create(@Body() createIncomePaymentDto: CreateIncomePaymentDto): Promise<IncomePayment> {
    return this.incomePaymentsService.create(createIncomePaymentDto);
  }

  @Get()
  async findAll(): Promise<IncomePayment[]> {
    return this.incomePaymentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: Guid): Promise<IncomePayment> {
    return this.incomePaymentsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: Guid, @Body() updateIncomePaymentDto: UpdateIncomePaymentDto): Promise<IncomePayment> {
    return this.incomePaymentsService.update(id, updateIncomePaymentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Guid): Promise<void> {
    return this.incomePaymentsService.remove(id);
  }
}
