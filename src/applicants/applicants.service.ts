import { Injectable, Inject } from '@nestjs/common';
import { Applicant } from './applicant.entity';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { Guid } from 'guid-typescript'

@Injectable()
export class ApplicantsService {
  constructor(
    @Inject('APPLICANTS_REPOSITORY')
    private model: typeof Applicant
  ) {}

  async create(createApplicantDto: CreateApplicantDto): Promise<Applicant> {
    const object = new Applicant()
    for (const field in createApplicantDto) {
      object[field] = createApplicantDto[field]
    }
    return object.save()
  }

  async findAll(): Promise<Applicant[]> {
    return this.model.findAll<Applicant>()
  }

  async findOne(id: Guid): Promise<Applicant> {
    return this.model.findOne<Applicant>({
      where: {
        id
      }
    })
  }

  async update(id: Guid, updateApplicantDto: UpdateApplicantDto): Promise<Applicant> {
    const object = await this.model.findOne({
      where: {
        id
      }
    })
    return await object.update(updateApplicantDto)
  }

  async remove(id: Guid): Promise<void> {
    await this.model.destroy({
      where: {
        id
      }
    })
  }
}