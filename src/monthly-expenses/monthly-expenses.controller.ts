import { Injectable, Inject, Scope, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ApplicantsService } from 'src/applicants/applicants.service'
import { MonthlyExpensesService } from './monthly-expenses.service'
import { CreateMonthlyExpenseDto } from './dto/create-monthly-expense.dto'
import { UpdateMonthlyExpenseDto } from './dto/update-monthly-expense.dto'
import { Guid } from 'guid-typescript'
import { MonthlyExpense } from './monthly-expense.entity'
import { REQUEST } from '@nestjs/core'
import { Applicant } from 'src/applicants/applicant.entity'

@Controller('monthly-expenses')
@Injectable({ scope: Scope.REQUEST })
export class MonthlyExpensesController {
  private readonly applicantsService: ApplicantsService
  constructor (
    @Inject(REQUEST) private readonly request: Record<string, any>,
    private readonly monthlyExpensesService: MonthlyExpensesService
  ) {
    this.applicantsService = new ApplicantsService(Applicant)
  }

  @Post()
  async create (@Body() body: Record<string, any>): Promise<MonthlyExpense> {
    const { user, application } = this.request
    const applicant = await this.applicantsService.findOne(application.id, body.applicantid)
    return await this.monthlyExpensesService.create(user.id, application.id, applicant.id, body as CreateMonthlyExpenseDto)
  }

  @Get()
  async findAll (): Promise<MonthlyExpense[]> {
    return await this.monthlyExpensesService.findAll(this.request.application.id)
  }

  @Get(':id')
  async findOne (@Param('id') id: Guid): Promise<MonthlyExpense> {
    const { application } = this.request
    return await this.monthlyExpensesService.findOne(application.id, id)
  }

  @Patch(':id')
  async update (@Param('id') id: Guid, @Body() updateMonthlyExpenseDto: UpdateMonthlyExpenseDto): Promise<MonthlyExpense> {
    const { application } = this.request
    return await this.monthlyExpensesService.update(application.id, id, updateMonthlyExpenseDto)
  }

  @Delete(':id')
  async remove (@Param('id') id: Guid): Promise<void> {
    const { application } = this.request
    return await this.monthlyExpensesService.remove(application.id, id)
  }
}
