import { Injectable, Inject, Scope, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { AddressService } from './address.service'
import { ApplicantsService } from 'src/applicants/applicants.service'
import { CreateAddressDto } from './dto/create-address.dto'
import { UpdateAddressDto } from './dto/update-address.dto'
import { Guid } from 'guid-typescript'
import { Address } from './address.entity'
import { REQUEST } from '@nestjs/core'
import { Applicant } from 'src/applicants/applicant.entity'

@Controller('address')
@Injectable({ scope: Scope.REQUEST })
export class AddressController {
  private readonly applicantsService: ApplicantsService
  constructor (
    @Inject(REQUEST) private readonly request: Record<string, any>,
    private readonly addressService: AddressService
  ) {
    this.applicantsService = new ApplicantsService(Applicant)
  }

  @Post()
  async create (@Body() body: Record<string, any>): Promise<Address> {
    const { user, application } = this.request
    let applicantid
    if (body.applicantid !== undefined && body.applicationid !== null) {
      const applicant = await this.applicantsService.findOne(application.id, body.applicantid)
      applicantid = applicant.id
    }
    return await this.addressService.create(user.id, application.id, applicantid, body as CreateAddressDto)
  }

  @Get()
  async findAll (): Promise<Address[]> {
    return await this.addressService.findAll(this.request.application.id)
  }

  @Get(':id')
  async findOne (@Param('id') id: Guid): Promise<Address> {
    const { application } = this.request
    return await this.addressService.findOne(application.id, id)
  }

  @Patch(':id')
  async update (@Param('id') id: Guid, @Body() updateAddressDto: UpdateAddressDto): Promise<Address> {
    const { application } = this.request
    return await this.addressService.update(application.id, id, updateAddressDto)
  }

  @Delete(':id')
  async remove (@Param('id') id: Guid): Promise<void> {
    const { application } = this.request
    return await this.addressService.remove(application.id, id)
  }
}
