import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarLoansService } from './car-loans.service';
import { CreateCarLoanDto } from './dto/create-car-loan.dto';
import { UpdateCarLoanDto } from './dto/update-car-loan.dto';
import { Guid } from 'guid-typescript'
import { CarLoan } from './car-loan.entity';

@Controller('car-loans')
export class CarLoansController {
  constructor(private readonly carLoansService: CarLoansService) {}

  @Post()
  async create(@Body() createCarLoanDto: CreateCarLoanDto): Promise<CarLoan> {
    return this.carLoansService.create(createCarLoanDto);
  }

  @Get()
  async findAll(): Promise<CarLoan[]> {
    return this.carLoansService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: Guid): Promise<CarLoan> {
    return this.carLoansService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: Guid, @Body() updateCarLoanDto: UpdateCarLoanDto): Promise<CarLoan> {
    return this.carLoansService.update(id, updateCarLoanDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Guid): Promise<void> {
    return this.carLoansService.remove(id);
  }
}
