import { Injectable, Inject } from '@nestjs/common';
import { Application } from './application.entity';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';

@Injectable()
export class ApplicationsService {
  constructor(
    @Inject('APPLICATIONS_REPOSITORY')
    private model: typeof Application
  ) {}

  async create(createApplicationDto: CreateApplicationDto): Promise<Application> {
    const object = new Application()
    for (const field in createApplicationDto) {
      object[field] = createApplicationDto[field]
    }
    return object.save()
  }

  async findAll(): Promise<Application[]> {
    return this.model.findAll<Application>()
  }

  async findOne(id: number): Promise<Application> {
    return this.model.findOne<Application>({
      where: {
        id
      }
    })
  }

  async update(id: number, updateApplicationDto: UpdateApplicationDto): Promise<Application> {
    const object = await this.model.findOne({
      where: {
        id
      }
    })
    return await object.update(updateApplicationDto)
  }

  async remove(id: number): Promise<void> {
    await this.model.destroy({
      where: {
        id
      }
    })
  }
}