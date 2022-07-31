import { Injectable, Inject } from '@nestjs/common'
import { CreateIncomePaymentDto } from './dto/create-income-payment.dto'
import { UpdateIncomePaymentDto } from './dto/update-income-payment.dto'
import { IncomePayment } from './income-payment.entity'
import { Guid } from 'guid-typescript'

@Injectable()
export class IncomePaymentsService {
  constructor (
    @Inject('INCOME_PAYMENTS_REPOSITORY')
    private readonly model: typeof IncomePayment
  ) {}

  async create (userid: Guid, applicationid: Guid, applicantid: Guid, createIncomePaymentDto: CreateIncomePaymentDto): Promise<IncomePayment> {
    const object = new IncomePayment()
    for (const field in createIncomePaymentDto) {
      object[field] = createIncomePaymentDto[field]
    }
    object.userid = userid
    object.applicationid = applicationid
    object.applicantid = applicantid
    return await object.save()
  }

  async findAll (applicationid: Guid): Promise<IncomePayment[]> {
    return await this.model.findAll<IncomePayment>({
      where: {
        applicationid
      }
    })
  }

  async findOne (applicationid: Guid, id: Guid): Promise<IncomePayment> {
    const object = await this.model.findOne<IncomePayment>({
      where: {
        id: id.toString(),
        applicationid: applicationid.toString()
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return object
  }

  async update (applicationid: Guid, id: Guid, updateIncomePaymentDto: UpdateIncomePaymentDto): Promise<IncomePayment> {
    const object = await this.model.findOne({
      where: {
        id: id.toString(),
        applicationid: applicationid.toString()
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return await object.update(updateIncomePaymentDto)
  }

  async remove (applicationid: Guid, id: Guid): Promise<void> {
    const affected = await this.model.destroy({
      where: {
        id: id.toString(),
        applicationid: applicationid.toString()
      }
    })
    if (affected === 0) {
      throw new Error('invalid-id')
    }
  }
}
