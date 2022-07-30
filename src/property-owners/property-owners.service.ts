import { Injectable, Inject } from '@nestjs/common';
import { CreatePropertyOwnerDto } from './dto/create-property-owner.dto';
import { UpdatePropertyOwnerDto } from './dto/update-property-owner.dto';
import { PropertyOwner } from './property-owner.entity';

@Injectable()
export class PropertyOwnersService {
  constructor(
    @Inject('PROPERTY_OWNERS_REPOSITORY')
    private model: typeof PropertyOwner
  ) {}

  async create(createPropertyOwnerDto: CreatePropertyOwnerDto): Promise<PropertyOwner> {
    const object = new PropertyOwner()
    for (const field in createPropertyOwnerDto) {
      object[field] = createPropertyOwnerDto[field]
    }
    return object.save()
  }

  async findAll(): Promise<PropertyOwner[]> {
    return this.model.findAll<PropertyOwner>()
  }

  async findOne(id: number): Promise<PropertyOwner> {
    return this.model.findOne<PropertyOwner>({
      where: {
        id
      }
    })
  }

  async update(id: number, updatePropertyOwnerDto: UpdatePropertyOwnerDto): Promise<PropertyOwner> {
    const object = await this.model.findOne({
      where: {
        id
      }
    })
    return await object.update(updatePropertyOwnerDto)
  }

  async remove(id: number): Promise<void> {
    await this.model.destroy({
      where: {
        id
      }
    })
  }
}