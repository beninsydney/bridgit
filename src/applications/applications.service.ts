import { Injectable, Inject } from '@nestjs/common'
import { Application } from './application.entity'
import { CreateApplicationDto } from './dto/create-application.dto'
import { UpdateApplicationDto } from './dto/update-application.dto'
import { Guid } from 'guid-typescript'

@Injectable()
export class ApplicationsService {
  constructor (
    @Inject('APPLICATIONS_REPOSITORY')
    private readonly model: typeof Application
  ) {}

  async create (userid: Guid, createApplicationDto: CreateApplicationDto): Promise<Application> {
    const object = new Application()
    for (const field in createApplicationDto) {
      object[field] = createApplicationDto[field]
    }
    object.userid = userid
    return await object.save()
  }

  async findAll (userid: Guid): Promise<Application[]> {
    return await this.model.findAll<Application>({
      where: {
        userid
      }
    })
  }

  async findOne (userid: Guid, id: Guid): Promise<Application> {
    const object = await this.model.findOne<Application>({
      where: {
        id,
        userid
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return object
  }

  async update (userid: Guid, id: Guid, updateApplicationDto: UpdateApplicationDto): Promise<Application> {
    const object = await this.model.findOne({
      where: {
        id,
        userid
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return await object.update(updateApplicationDto)
  }

  async remove (userid: Guid, id: Guid): Promise<void> {
    const affected = await this.model.destroy({
      where: {
        id,
        userid
      }
    })
    if (affected === 0) {
      throw new Error('invalid-id')
    }
  }
}
