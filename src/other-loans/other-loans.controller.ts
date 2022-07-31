import { Injectable, Inject, Scope, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ApplicantsService } from 'src/applicants/applicants.service'
import { OtherLoansService } from './other-loans.service'
import { CreateOtherLoanDto } from './dto/create-other-loan.dto'
import { UpdateOtherLoanDto } from './dto/update-other-loan.dto'
import { Guid } from 'guid-typescript'
import { OtherLoan } from './other-loan.entity'
import { REQUEST } from '@nestjs/core'
import { Applicant } from 'src/applicants/applicant.entity'

@Controller('other-loans')
@Injectable({ scope: Scope.REQUEST })
export class OtherLoansController {
  private readonly applicantsService: ApplicantsService
  constructor (
    @Inject(REQUEST) private readonly request: Record<string, any>,
    private readonly otherLoansService: OtherLoansService
  ) {
    this.applicantsService = new ApplicantsService(Applicant)
  }

  @Post()
  async create (@Body() body: Record<string, any>): Promise<OtherLoan> {
    const { user, application } = this.request
    const applicant = await this.applicantsService.findOne(application.id, body.applicantid)
    return await this.otherLoansService.create(user.id, application.id, applicant.id, body as CreateOtherLoanDto)
  }

  @Get()
  async findAll (): Promise<OtherLoan[]> {
    return await this.otherLoansService.findAll(this.request.application.id)
  }

  @Get(':id')
  async findOne (@Param('id') id: Guid): Promise<OtherLoan> {
    const { application } = this.request
    return await this.otherLoansService.findOne(application.id, id)
  }

  @Patch(':id')
  async update (@Param('id') id: Guid, @Body() updateOtherLoanDto: UpdateOtherLoanDto): Promise<OtherLoan> {
    const { application } = this.request
    return await this.otherLoansService.update(application.id, id, updateOtherLoanDto)
  }

  @Delete(':id')
  async remove (@Param('id') id: Guid): Promise<void> {
    const { application } = this.request
    return await this.otherLoansService.remove(application.id, id)
  }
}
