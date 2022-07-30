import { Injectable, Inject } from '@nestjs/common';
import { CarLoan } from './car-loan.entity';
import { CreateCarLoanDto } from './dto/create-car-loan.dto';
import { UpdateCarLoanDto } from './dto/update-car-loan.dto';

@Injectable()
export class CarLoansService {
  constructor(
    @Inject('CAR_LOANS_REPOSITORY')
    private model: typeof CarLoan
  ) {}

  async create(createCarLoanDto: CreateCarLoanDto): Promise<CarLoan> {
    const object = new CarLoan()
    for (const field in createCarLoanDto) {
      object[field] = createCarLoanDto[field]
    }
    return object.save()
  }

  async findAll(): Promise<CarLoan[]> {
    return this.model.findAll<CarLoan>()
  }

  async findOne(id: number): Promise<CarLoan> {
    return this.model.findOne<CarLoan>({
      where: {
        id
      }
    })
  }

  async update(id: number, updateCarLoanDto: UpdateCarLoanDto): Promise<CarLoan> {
    const object = await this.model.findOne({
      where: {
        id
      }
    })
    return await object.update(updateCarLoanDto)
  }

  async remove(id: number): Promise<void> {
    await this.model.destroy({
      where: {
        id
      }
    })
  }
}