import { Injectable, Inject } from '@nestjs/common'
import { CreatePropertyOwnerDto } from './dto/create-property-owner.dto'
import { UpdatePropertyOwnerDto } from './dto/update-property-owner.dto'
import { PropertyOwner } from './property-owner.entity'
import { Guid } from 'guid-typescript'

@Injectable()
export class PropertyOwnersService {
  constructor (
    @Inject('PROPERTY_OWNERS_REPOSITORY')
    private readonly model: typeof PropertyOwner
  ) {}

  async create (userid: Guid, applicationid: Guid, applicantid: Guid, createPropertyOwnerDto: CreatePropertyOwnerDto): Promise<PropertyOwner> {
    const object = new PropertyOwner()
    for (const field in createPropertyOwnerDto) {
      object[field] = createPropertyOwnerDto[field]
    }
    object.userid = userid
    object.applicationid = applicationid
    object.applicantid = applicantid
    return await object.save()
  }

  async findAll (applicationid: Guid): Promise<PropertyOwner[]> {
    return await this.model.findAll<PropertyOwner>({
      where: {
        applicationid
      }
    })
  }

  async findOne (applicationid: Guid, id: Guid): Promise<PropertyOwner> {
    const object = await this.model.findOne<PropertyOwner>({
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

  async update (applicationid: Guid, id: Guid, updatePropertyOwnerDto: UpdatePropertyOwnerDto): Promise<PropertyOwner> {
    const object = await this.model.findOne({
      where: {
        id,
        applicationid
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return await object.update(updatePropertyOwnerDto)
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
