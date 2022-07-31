import { Injectable, Inject, Scope, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ApplicantsService } from 'src/applicants/applicants.service'
import { PropertiesService } from './properties.service'
import { CreatePropertyDto } from './dto/create-property.dto'
import { UpdatePropertyDto } from './dto/update-property.dto'
import { Guid } from 'guid-typescript'
import { Property } from './property.entity'
import { REQUEST } from '@nestjs/core'
import { Applicant } from 'src/applicants/applicant.entity'

@Controller('properties')
@Injectable({ scope: Scope.REQUEST })
export class PropertiesController {
  private readonly applicantsService: ApplicantsService

  constructor (
    @Inject(REQUEST) private readonly request: Record<string, any>,
    private readonly propertiesService: PropertiesService
  ) {
    this.applicantsService = new ApplicantsService(Applicant)
  }

  @Post()
  async create (@Body() body: Record<string, any>): Promise<Property> {
    const { user, application } = this.request
    const applicant = await this.applicantsService.findOne(application.id, body.applicantid)
    return await this.propertiesService.create(user.id, application.id, applicant.id, body as CreatePropertyDto)
  }

  @Get()
  async findAll (): Promise<Property[]> {
    return await this.propertiesService.findAll(this.request.application.id)
  }

  @Get(':id')
  async findOne (@Param('id') id: Guid): Promise<Property> {
    const { application } = this.request
    return await this.propertiesService.findOne(application.id, id)
  }

  @Patch(':id')
  async update (@Param('id') id: Guid, @Body() updatePropertyDto: UpdatePropertyDto): Promise<Property> {
    const { application } = this.request
    return await this.propertiesService.update(application.id, id, updatePropertyDto)
  }

  @Delete(':id')
  async remove (@Param('id') id: Guid): Promise<void> {
    const { application } = this.request
    return await this.propertiesService.remove(application.id, id)
  }
}
