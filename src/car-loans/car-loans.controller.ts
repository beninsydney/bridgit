import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarLoansService } from './car-loans.service';
import { CreateCarLoanDto } from './dto/create-car-loan.dto';
import { UpdateCarLoanDto } from './dto/update-car-loan.dto';

@Controller('car-loans')
export class CarLoansController {
  constructor(private readonly carLoansService: CarLoansService) {}

  @Post()
  create(@Body() createCarLoanDto: CreateCarLoanDto) {
    return this.carLoansService.create(createCarLoanDto);
  }

  @Get()
  findAll() {
    return this.carLoansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carLoansService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarLoanDto: UpdateCarLoanDto) {
    return this.carLoansService.update(+id, updateCarLoanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carLoansService.remove(+id);
  }
}
