import { Injectable, Inject, Scope, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ApplicantsService } from 'src/applicants/applicants.service'
import { IncomePaymentsService } from './income-payments.service'
import { CreateIncomePaymentDto } from './dto/create-income-payment.dto'
import { UpdateIncomePaymentDto } from './dto/update-income-payment.dto'
import { Guid } from 'guid-typescript'
import { IncomePayment } from './income-payment.entity'
import { REQUEST } from '@nestjs/core'
import { Applicant } from 'src/applicants/applicant.entity'

@Controller('income-payments')
@Injectable({ scope: Scope.REQUEST })
export class IncomePaymentsController {
  private readonly applicantsService: ApplicantsService
  constructor (
    @Inject(REQUEST) private readonly request: Record<string, any>,
    private readonly incomePaymentsService: IncomePaymentsService
  ) {
    this.applicantsService = new ApplicantsService(Applicant)
  }

  @Post()
  async create (@Body() body: Record<string, any>): Promise<IncomePayment> {
    const { user, application } = this.request
    const applicant = await this.applicantsService.findOne(application.id, body.applicantid)
    return await this.incomePaymentsService.create(user.id, application.id, applicant.id, body as CreateIncomePaymentDto)
  }

  @Get()
  async findAll (): Promise<IncomePayment[]> {
    return await this.incomePaymentsService.findAll(this.request.application.id)
  }

  @Get(':id')
  async findOne (@Param('id') id: Guid): Promise<IncomePayment> {
    const { application } = this.request
    return await this.incomePaymentsService.findOne(application.id, id)
  }

  @Patch(':id')
  async update (@Param('id') id: Guid, @Body() updateIncomePaymentDto: UpdateIncomePaymentDto): Promise<IncomePayment> {
    const { application } = this.request
    return await this.incomePaymentsService.update(application.id, id, updateIncomePaymentDto)
  }

  @Delete(':id')
  async remove (@Param('id') id: Guid): Promise<void> {
    const { application } = this.request
    return await this.incomePaymentsService.remove(application.id, id)
  }
}
