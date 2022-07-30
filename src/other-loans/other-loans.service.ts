import { Injectable, Inject } from '@nestjs/common';
import { CreateOtherLoanDto } from './dto/create-other-loan.dto';
import { UpdateOtherLoanDto } from './dto/update-other-loan.dto';
import { OtherLoan } from './other-loan.entity';

@Injectable()
export class OtherLoansService {
  constructor(
    @Inject('OTHER_LOANS_REPOSITORY')
    private model: typeof OtherLoan
  ) {}

  async create(createOtherLoanDto: CreateOtherLoanDto): Promise<OtherLoan> {
    const object = new OtherLoan()
    for (const field in createOtherLoanDto) {
      object[field] = createOtherLoanDto[field]
    }
    return object.save()
  }

  async findAll(): Promise<OtherLoan[]> {
    return this.model.findAll<OtherLoan>()
  }

  async findOne(id: number): Promise<OtherLoan> {
    return this.model.findOne<OtherLoan>({
      where: {
        id
      }
    })
  }

  async update(id: number, updateOtherLoanDto: UpdateOtherLoanDto): Promise<OtherLoan> {
    const object = await this.model.findOne({
      where: {
        id
      }
    })
    return await object.update(updateOtherLoanDto)
  }

  async remove(id: number): Promise<void> {
    await this.model.destroy({
      where: {
        id
      }
    })
  }
}