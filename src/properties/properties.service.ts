import { Injectable, Inject } from '@nestjs/common'
import { CreatePropertyDto } from './dto/create-property.dto'
import { UpdatePropertyDto } from './dto/update-property.dto'
import { Property } from './property.entity'
import { Guid } from 'guid-typescript'

@Injectable()
export class PropertiesService {
  constructor (
    @Inject('PROPERTIES_REPOSITORY')
    private readonly model: typeof Property
  ) {}

  async create (userid: Guid, applicationid: Guid, applicantid: Guid, createPropertyDto: CreatePropertyDto): Promise<Property> {
    const object = new Property()
    for (const field in createPropertyDto) {
      object[field] = createPropertyDto[field]
    }
    object.userid = userid
    object.applicationid = applicationid
    object.applicantid = applicantid
    return await object.save()
  }

  async findAll (applicationid: Guid): Promise<Property[]> {
    return await this.model.findAll<Property>({
      where: {
        applicationid
      }
    })
  }

  async findOne (applicationid: Guid, id: Guid): Promise<Property> {
    const object = await this.model.findOne<Property>({
      where: {
        id: id.toString(),
        applicationid: applicationid.toString()
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return object
  }

  async update (applicationid: Guid, id: Guid, updatePropertyDto: UpdatePropertyDto): Promise<Property> {
    const object = await this.model.findOne({
      where: {
        id: id.toString(),
        applicationid: applicationid.toString()
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return await object.update(updatePropertyDto)
  }

  async remove (applicationid: Guid, id: Guid): Promise<void> {
    const affected = await this.model.destroy({
      where: {
        id: id.toString(),
        applicationid: applicationid.toString()
      }
    })
    if (affected === 0) {
      throw new Error('invalid-id')
    }
  }
}
