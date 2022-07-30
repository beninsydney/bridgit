import { Injectable } from '@nestjs/common';
import { CreateOtherLoanDto } from './dto/create-other-loan.dto';
import { UpdateOtherLoanDto } from './dto/update-other-loan.dto';

@Injectable()
export class OtherLoansService {
  create(createOtherLoanDto: CreateOtherLoanDto) {
    return 'This action adds a new otherLoan';
  }

  findAll() {
    return `This action returns all otherLoans`;
  }

  findOne(id: number) {
    return `This action returns a #${id} otherLoan`;
  }

  update(id: number, updateOtherLoanDto: UpdateOtherLoanDto) {
    return `This action updates a #${id} otherLoan`;
  }

  remove(id: number) {
    return `This action removes a #${id} otherLoan`;
  }
}
