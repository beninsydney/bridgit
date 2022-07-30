import { Injectable, Inject } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './property.entity';

@Injectable()
export class PropertiesService {
  constructor(
    @Inject('PROPERTIES_REPOSITORY')
    private model: typeof Property
  ) {}

  async create(createPropertyDto: CreatePropertyDto): Promise<Property> {
    const object = new Property()
    for (const field in createPropertyDto) {
      object[field] = createPropertyDto[field]
    }
    return object.save()
  }

  async findAll(): Promise<Property[]> {
    return this.model.findAll<Property>()
  }

  async findOne(id: number): Promise<Property> {
    return this.model.findOne<Property>({
      where: {
        id
      }
    })
  }

  async update(id: number, updatePropertyDto: UpdatePropertyDto): Promise<Property> {
    const object = await this.model.findOne({
      where: {
        id
      }
    })
    return await object.update(updatePropertyDto)
  }

  async remove(id: number): Promise<void> {
    await this.model.destroy({
      where: {
        id
      }
    })
  }
}