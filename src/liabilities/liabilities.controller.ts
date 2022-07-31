import { Injectable, Inject, Scope, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ApplicantsService } from 'src/applicants/applicants.service'
import { LiabilitiesService } from './liabilities.service'
import { CreateLiabilityDto } from './dto/create-liability.dto'
import { UpdateLiabilityDto } from './dto/update-liability.dto'
import { Guid } from 'guid-typescript'
import { Liability } from './liability.entity'
import { REQUEST } from '@nestjs/core'
import { Applicant } from 'src/applicants/applicant.entity'

@Controller('liabilities')
@Injectable({ scope: Scope.REQUEST })
export class LiabilitiesController {
  private readonly applicantsService: ApplicantsService
  constructor (
    @Inject(REQUEST) private readonly request: Record<string, any>,
    private readonly liabilitiesService: LiabilitiesService
  ) {
    this.applicantsService = new ApplicantsService(Applicant)
  }

  @Post()
  async create (@Body() body: Record<string, any>): Promise<Liability> {
    const { user, application } = this.request
    const applicant = await this.applicantsService.findOne(application.id, body.applicantid)
    return await this.liabilitiesService.create(user.id, application.id, applicant.id, body as CreateLiabilityDto)
  }

  @Get(':id')
  async findOne (@Param('id') id: Guid): Promise<Liability> {
    const { application } = this.request
    return await this.liabilitiesService.findOne(application.id, id)
  }

  @Patch(':id')
  async update (@Param('id') id: Guid, @Body() updateLiabilityDto: UpdateLiabilityDto): Promise<Liability> {
    const { application } = this.request
    return await this.liabilitiesService.update(application.id, id, updateLiabilityDto)
  }

  @Delete(':id')
  async remove (@Param('id') id: Guid): Promise<void> {
    const { application } = this.request
    return await this.liabilitiesService.remove(application.id, id)
  }
}
