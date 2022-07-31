import { Injectable, Inject } from '@nestjs/common'
import { CreateAddressDto } from './dto/create-address.dto'
import { UpdateAddressDto } from './dto/update-address.dto'
import { Address } from './address.entity'
import { Guid } from 'guid-typescript'

@Injectable()
export class AddressService {
  constructor (
    @Inject('ADDRESS_REPOSITORY')
    private readonly model: typeof Address
  ) {}

  async create (userid: Guid, applicationid: Guid, applicantid: Guid, createAddressDto: CreateAddressDto): Promise<Address> {
    const object = new Address()
    for (const field in createAddressDto) {
      object[field] = createAddressDto[field]
    }
    object.userid = userid
    object.applicationid = applicationid
    object.applicantid = applicantid
    return await object.save()
  }

  async findAll (applicationid: Guid): Promise<Address[]> {
    return await this.model.findAll<Address>({
      where: {
        applicationid
      }
    })
  }

  async findOne (applicationid: Guid, id: Guid): Promise<Address> {
    const object = await this.model.findOne<Address>({
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

  async update (applicationid: Guid, id: Guid, updateAddressDto: UpdateAddressDto): Promise<Address> {
    const object = await this.model.findOne({
      where: {
        id: id.toString(),
        applicationid: applicationid.toString()
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return await object.update(updateAddressDto)
  }

  async remove (applicationid, id: Guid): Promise<void> {
    const affected = await this.model.destroy({
      where: {
        id
      }
    })
    if (affected === 0) {
      throw new Error('invalid-id')
    }
  }
}
