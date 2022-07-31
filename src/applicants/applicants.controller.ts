import { Injectable, Inject, Scope, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ApplicantsService } from './applicants.service'; import { CreateApplicantDto } from './dto/create-applicant.dto'
import { UpdateApplicantDto } from './dto/update-applicant.dto'
import { Guid } from 'guid-typescript'
import { REQUEST } from '@nestjs/core'
import { Applicant } from './applicant.entity'

@Controller('applicants')
@Injectable({ scope: Scope.REQUEST })
export class ApplicantsController {
  constructor (
    @Inject(REQUEST) private readonly request: Record<string, any>,
    private readonly applicantsService: ApplicantsService
  ) {}

  @Post()
  async create (@Body() body: Record<string, any>): Promise<Applicant> {
    const { user, application } = this.request
    return await this.applicantsService.create(user.id, application.id, body as CreateApplicantDto)
  }

  @Get()
  async findAll (): Promise<Applicant[]> {
    return await this.applicantsService.findAll(this.request.application.id)
  }

  @Get(':id')
  async findOne (@Param('id') id: Guid): Promise<Applicant> {
    const { application } = this.request
    return await this.applicantsService.findOne(application.id, id)
  }

  @Patch(':id')
  async update (@Param('id') id: Guid, @Body() updateApplicantDto: UpdateApplicantDto): Promise<Applicant> {
    const { application } = this.request
    return await this.applicantsService.update(application.id, id, updateApplicantDto)
  }

  @Delete(':id')
  async remove (@Param('id') id: Guid): Promise<void> {
    const { application } = this.request
    return await this.applicantsService.remove(application.id, id)
  }
}
