import { Inject } from '@nestjs/common'
import { Applicant } from './applicant.entity'
import { CreateApplicantDto } from './dto/create-applicant.dto'
import { UpdateApplicantDto } from './dto/update-applicant.dto'
import { Guid } from 'guid-typescript'

export class ApplicantsService {
  constructor (
    @Inject('APPLICANTS_REPOSITORY')
    private readonly model: typeof Applicant
  ) {}

  async create (userid: Guid, applicationid: Guid, createApplicantDto: CreateApplicantDto): Promise<Applicant> {
    const object = new Applicant()
    for (const field in createApplicantDto) {
      object[field] = createApplicantDto[field]
    }
    object.userid = userid
    object.applicationid = applicationid
    return await object.save()
  }

  async findAll (applicationid?: Guid): Promise<Applicant[]> {
    return await this.model.findAll<Applicant>({
      where: {
        applicationid
      }
    })
  }

  async findOne (applicationid: Guid, id: Guid): Promise<Applicant> {
    const object = await this.model.findOne<Applicant>({
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

  async update (applicationid: Guid, id: Guid, updateApplicantDto: UpdateApplicantDto): Promise<Applicant> {
    const object = await this.model.findOne({
      where: {
        id,
        applicationid
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return await object.update(updateApplicantDto)
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
