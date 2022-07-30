import { Injectable } from '@nestjs/common';
import { CreateIncomePaymentDto } from './dto/create-income-payment.dto';
import { UpdateIncomePaymentDto } from './dto/update-income-payment.dto';

@Injectable()
export class IncomePaymentsService {
  create(createIncomePaymentDto: CreateIncomePaymentDto) {
    return 'This action adds a new incomePayment';
  }

  findAll() {
    return `This action returns all incomePayments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} incomePayment`;
  }

  update(id: number, updateIncomePaymentDto: UpdateIncomePaymentDto) {
    return `This action updates a #${id} incomePayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} incomePayment`;
  }
}
