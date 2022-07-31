import { Injectable, Inject } from '@nestjs/common'
import { CreateLiabilityDto } from './dto/create-liability.dto'
import { UpdateLiabilityDto } from './dto/update-liability.dto'
import { Liability } from './liability.entity'
import { Guid } from 'guid-typescript'

@Injectable()
export class LiabilitiesService {
  constructor (
    @Inject('LIABILITIES_REPOSITORY')
    private readonly model: typeof Liability
  ) {}

  async create (userid: Guid, applicationid: Guid, applicantid: Guid, createLiabilityDto: CreateLiabilityDto): Promise<Liability> {
    const object = new Liability()
    for (const field in createLiabilityDto) {
      object[field] = createLiabilityDto[field]
    }
    object.userid = userid
    object.applicationid = applicationid
    object.applicantid = applicantid
    return await object.save()
  }

  async findAll (applicationid: Guid): Promise<Liability[]> {
    return await this.model.findAll<Liability>({
      where: {
        applicationid
      }
    })
  }

  async findOne (applicationid: Guid, id: Guid): Promise<Liability> {
    const object = await this.model.findOne<Liability>({
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

  async update (applicationid: Guid, id: Guid, updateLiabilityDto: UpdateLiabilityDto): Promise<Liability> {
    const object = await this.model.findOne({
      where: {
        id,
        applicationid
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return await object.update(updateLiabilityDto)
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
