import { Injectable, Inject, Scope, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ApplicantsService } from 'src/applicants/applicants.service'
import { CarLoansService } from './car-loans.service'
import { CreateCarLoanDto } from './dto/create-car-loan.dto'
import { UpdateCarLoanDto } from './dto/update-car-loan.dto'
import { Guid } from 'guid-typescript'
import { CarLoan } from './car-loan.entity'
import { REQUEST } from '@nestjs/core'
import { Applicant } from 'src/applicants/applicant.entity'

@Controller('car-loans')
@Injectable({ scope: Scope.REQUEST })
export class CarLoansController {
  private readonly applicantsService: ApplicantsService
  constructor (
    @Inject(REQUEST) private readonly request: Record<string, any>,
    private readonly carLoansService: CarLoansService
  ) {
    this.applicantsService = new ApplicantsService(Applicant)
  }

  @Post()
  async create (@Body() body: Record<string, any>): Promise<CarLoan> {
    const { user, application } = this.request
    const applicant = await this.applicantsService.findOne(application.id, body.applicantid)
    return await this.carLoansService.create(user.id, application.id, applicant.id, body as CreateCarLoanDto)
  }

  @Get()
  async findAll (): Promise<CarLoan[]> {
    return await this.carLoansService.findAll(this.request.application.id)
  }

  @Get(':id')
  async findOne (@Param('id') id: Guid): Promise<CarLoan> {
    const { application } = this.request
    return await this.carLoansService.findOne(application.id, id)
  }

  @Patch(':id')
  async update (@Param('id') id: Guid, @Body() updateCarLoanDto: UpdateCarLoanDto): Promise<CarLoan> {
    const { application } = this.request
    return await this.carLoansService.update(application.id, id, updateCarLoanDto)
  }

  @Delete(':id')
  async remove (@Param('id') id: Guid): Promise<void> {
    const { application } = this.request
    return await this.carLoansService.remove(application.id, id)
  }
}
