import { Injectable, Inject } from '@nestjs/common'
import { CreateMonthlyExpenseDto } from './dto/create-monthly-expense.dto'
import { UpdateMonthlyExpenseDto } from './dto/update-monthly-expense.dto'
import { MonthlyExpense } from './monthly-expense.entity'
import { Guid } from 'guid-typescript'

@Injectable()
export class MonthlyExpensesService {
  constructor (
    @Inject('MONTHLY_EXPENSES_REPOSITORY')
    private readonly model: typeof MonthlyExpense
  ) {}

  async create (userid: Guid, applicationid: Guid, applicantid: Guid, createMonthlyExpenseDto: CreateMonthlyExpenseDto): Promise<MonthlyExpense> {
    const object = new MonthlyExpense()
    for (const field in createMonthlyExpenseDto) {
      object[field] = createMonthlyExpenseDto[field]
    }
    object.userid = userid
    object.applicationid = applicationid
    object.applicantid = applicantid
    return await object.save()
  }

  async findAll (applicationid: Guid): Promise<MonthlyExpense[]> {
    return await this.model.findAll<MonthlyExpense>({
      where: {
        applicationid
      }
    })
  }

  async findOne (applicationid: Guid, id: Guid): Promise<MonthlyExpense> {
    const object = await this.model.findOne<MonthlyExpense>({
      where: {
        id,
        applicationid
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return object
  }

  async update (applicationid: Guid, id: Guid, updateMonthlyExpenseDto: UpdateMonthlyExpenseDto): Promise<MonthlyExpense> {
    const object = await this.model.findOne({
      where: {
        id,
        applicationid
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return await object.update(updateMonthlyExpenseDto)
  }

  async remove (applicationid: Guid, id: Guid): Promise<void> {
    const affected = await this.model.destroy({
      where: {
        id,
        applicationid
      }
    })
    if (affected === 0) {
      throw new Error('invalid-id')
    }
  }
}
