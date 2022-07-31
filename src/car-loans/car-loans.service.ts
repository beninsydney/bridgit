import { Injectable, Inject } from '@nestjs/common'
import { CarLoan } from './car-loan.entity'
import { CreateCarLoanDto } from './dto/create-car-loan.dto'
import { UpdateCarLoanDto } from './dto/update-car-loan.dto'
import { Guid } from 'guid-typescript'

@Injectable()
export class CarLoansService {
  constructor (
    @Inject('CAR_LOANS_REPOSITORY')
    private readonly model: typeof CarLoan
  ) {}

  async create (userid: Guid, applicationid: Guid, applicantid: Guid, createCarLoanDto: CreateCarLoanDto): Promise<CarLoan> {
    const object = new CarLoan()
    for (const field in createCarLoanDto) {
      object[field] = createCarLoanDto[field]
    }
    object.userid = userid
    object.applicationid = applicationid
    object.applicantid = applicantid
    return await object.save()
  }

  async findAll (applicationid: Guid): Promise<CarLoan[]> {
    return await this.model.findAll<CarLoan>({
      where: {
        applicationid
      }
    })
  }

  async findOne (applicationid: Guid, id: Guid): Promise<CarLoan> {
    const object = await this.model.findOne<CarLoan>({
      where: {
        id: id.toString(),
        applicationid: applicationid.toString()
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return object
  }

  async update (applicationid: Guid, id: Guid, updateCarLoanDto: UpdateCarLoanDto): Promise<CarLoan> {
    const object = await this.model.findOne({
      where: {
        id: id.toString(),
        applicationid: applicationid.toString()
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return await object.update(updateCarLoanDto)
  }

  async remove (applicationid: Guid, id: Guid): Promise<void> {
    const affected = await this.model.destroy({
      where: {
        id: id.toString(),
        applicationid: applicationid.toString()
      }
    })
    if (affected === 0) {
      throw new Error('invalid-id')
    }
  }
}
