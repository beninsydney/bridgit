import { Injectable, Inject } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './address.entity';
import { Guid } from 'guid-typescript'

@Injectable()
export class AddressService {
  constructor(
    @Inject('ADDRESS_REPOSITORY')
    private model: typeof Address
  ) {}

  async create(createAddressDto: CreateAddressDto): Promise<Address> {
    const object = new Address()
    for (const field in createAddressDto) {
      object[field] = createAddressDto[field]
    }
    return object.save()
  }

  async findAll(): Promise<Address[]> {
    return this.model.findAll<Address>()
  }

  async findOne(id: Guid): Promise<Address> {
    return this.model.findOne<Address>({
      where: {
        id
      }
    })
  }

  async update(id: Guid, updateAddressDto: UpdateAddressDto): Promise<Address> {
    const object = await this.model.findOne({
      where: {
        id
      }
    })
    return await object.update(updateAddressDto)
  }

  async remove(id: Guid): Promise<void> {
    await this.model.destroy({
      where: {
        id
      }
    })
  }
}
