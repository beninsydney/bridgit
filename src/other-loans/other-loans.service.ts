import { Injectable, Inject } from '@nestjs/common'
import { CreateOtherLoanDto } from './dto/create-other-loan.dto'
import { UpdateOtherLoanDto } from './dto/update-other-loan.dto'
import { OtherLoan } from './other-loan.entity'
import { Guid } from 'guid-typescript'

@Injectable()
export class OtherLoansService {
  constructor (
    @Inject('OTHER_LOANS_REPOSITORY')
    private readonly model: typeof OtherLoan
  ) {}

  async create (userid: Guid, applicationid: Guid, applicantid: Guid, createOtherLoanDto: CreateOtherLoanDto): Promise<OtherLoan> {
    const object = new OtherLoan()
    for (const field in createOtherLoanDto) {
      object[field] = createOtherLoanDto[field]
    }
    object.userid = userid
    object.applicationid = applicationid
    object.applicantid = applicantid
    return await object.save()
  }

  async findAll (applicationid: Guid): Promise<OtherLoan[]> {
    return await this.model.findAll<OtherLoan>({
      where: {
        applicationid
      }
    })
  }

  async findOne (applicationid: Guid, id: Guid): Promise<OtherLoan> {
    const object = await this.model.findOne<OtherLoan>({
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

  async update (applicationid: Guid, id: Guid, updateOtherLoanDto: UpdateOtherLoanDto): Promise<OtherLoan> {
    const object = await this.model.findOne({
      where: {
        id,
        applicationid
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return await object.update(updateOtherLoanDto)
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
