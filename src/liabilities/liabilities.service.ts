import { Injectable, Inject } from '@nestjs/common';
import { CreateLiabilityDto } from './dto/create-liability.dto';
import { UpdateLiabilityDto } from './dto/update-liability.dto';
import { Liability } from './liability.entity';
import { Guid } from 'guid-typescript'

@Injectable()
export class LiabilitiesService {
  constructor(
    @Inject('LIABILITIES_REPOSITORY')
    private model: typeof Liability
  ) {}

  async create(createLiabilityDto: CreateLiabilityDto): Promise<Liability> {
    const object = new Liability()
    for (const field in createLiabilityDto) {
      object[field] = createLiabilityDto[field]
    }
    return object.save()
  }

  async findAll(): Promise<Liability[]> {
    return this.model.findAll<Liability>()
  }

  async findOne(id: Guid): Promise<Liability> {
    return this.model.findOne<Liability>({
      where: {
        id
      }
    })
  }

  async update(id: Guid, updateLiabilityDto: UpdateLiabilityDto): Promise<Liability> {
    const object = await this.model.findOne({
      where: {
        id
      }
    })
    return await object.update(updateLiabilityDto)
  }

  async remove(id: Guid): Promise<void> {
    await this.model.destroy({
      where: {
        id
      }
    })
  }
}