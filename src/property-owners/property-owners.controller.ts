import { Injectable, Inject, Scope, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ApplicantsService } from 'src/applicants/applicants.service'
import { PropertyOwnersService } from './property-owners.service'
import { CreatePropertyOwnerDto } from './dto/create-property-owner.dto'
import { UpdatePropertyOwnerDto } from './dto/update-property-owner.dto'
import { Guid } from 'guid-typescript'
import { PropertyOwner } from './property-owner.entity'
import { REQUEST } from '@nestjs/core'
import { Applicant } from 'src/applicants/applicant.entity'

@Controller('property-owners')
@Injectable({ scope: Scope.REQUEST })
export class PropertyOwnersController {
  private readonly applicantsService: ApplicantsService
  constructor (
    @Inject(REQUEST) private readonly request: Record<string, any>,
    private readonly propertyOwnersService: PropertyOwnersService
  ) {
    this.applicantsService = new ApplicantsService(Applicant)
  }

  @Post()
  async create (@Body() body: Record<string, any>): Promise<PropertyOwner> {
    const { user, application } = this.request
    const applicant = await this.applicantsService.findOne(application.id, body.applicantid)
    return await this.propertyOwnersService.create(user.id, application.id, applicant.id, body as CreatePropertyOwnerDto)
  }

  @Get()
  async findAll (): Promise<PropertyOwner[]> {
    return await this.propertyOwnersService.findAll(this.request.application.id)
  }

  @Get(':id')
  async findOne (@Param('id') id: Guid): Promise<PropertyOwner> {
    const { application } = this.request
    return await this.propertyOwnersService.findOne(application.id, id)
  }

  @Patch(':id')
  async update (@Param('id') id: Guid, @Body() updatePropertyOwnerDto: UpdatePropertyOwnerDto): Promise<PropertyOwner> {
    const { application } = this.request
    return await this.propertyOwnersService.update(application.id, id, updatePropertyOwnerDto)
  }

  @Delete(':id')
  async remove (@Param('id') id: Guid): Promise<void> {
    const { application } = this.request
    return await this.propertyOwnersService.remove(application.id, id)
  }
}
