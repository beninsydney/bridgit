import { Injectable } from '@nestjs/common';
import { CreateCarLoanDto } from './dto/create-car-loan.dto';
import { UpdateCarLoanDto } from './dto/update-car-loan.dto';

@Injectable()
export class CarLoansService {
  create(createCarLoanDto: CreateCarLoanDto) {
    return 'This action adds a new carLoan';
  }

  findAll() {
    return `This action returns all carLoans`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carLoan`;
  }

  update(id: number, updateCarLoanDto: UpdateCarLoanDto) {
    return `This action updates a #${id} carLoan`;
  }

  remove(id: number) {
    return `This action removes a #${id} carLoan`;
  }
}
