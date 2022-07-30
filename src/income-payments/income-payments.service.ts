import { Injectable, Inject } from '@nestjs/common';
import { CreateIncomePaymentDto } from './dto/create-income-payment.dto';
import { UpdateIncomePaymentDto } from './dto/update-income-payment.dto';
import { IncomePayment } from './income-payment.entity';

@Injectable()
export class IncomePaymentsService {
  constructor(
    @Inject('INCOME_PAYMENTS_REPOSITORY')
    private model: typeof IncomePayment
  ) {}

  async create(createIncomePaymentDto: CreateIncomePaymentDto): Promise<IncomePayment> {
    const object = new IncomePayment()
    for (const field in createIncomePaymentDto) {
      object[field] = createIncomePaymentDto[field]
    }
    return object.save()
  }

  async findAll(): Promise<IncomePayment[]> {
    return this.model.findAll<IncomePayment>()
  }

  async findOne(id: number): Promise<IncomePayment> {
    return this.model.findOne<IncomePayment>({
      where: {
        id
      }
    })
  }

  async update(id: number, updateIncomePaymentDto: UpdateIncomePaymentDto): Promise<IncomePayment> {
    const object = await this.model.findOne({
      where: {
        id
      }
    })
    return await object.update(updateIncomePaymentDto)
  }

  async remove(id: number): Promise<void> {
    await this.model.destroy({
      where: {
        id
      }
    })
  }
}