import { PartialType } from '@nestjs/mapped-types';
import { CreateIncomePaymentDto } from './create-income-payment.dto';

export class UpdateIncomePaymentDto extends PartialType(CreateIncomePaymentDto) {}
