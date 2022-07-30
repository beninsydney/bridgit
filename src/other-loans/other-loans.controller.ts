import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OtherLoansService } from './other-loans.service';
import { CreateOtherLoanDto } from './dto/create-other-loan.dto';
import { UpdateOtherLoanDto } from './dto/update-other-loan.dto';
import { Guid } from 'guid-typescript'
import { OtherLoan } from './other-loan.entity';

@Controller('other-loans')
export class OtherLoansController {
  constructor(private readonly otherLoansService: OtherLoansService) {}

  @Post()
  async create(@Body() createOtherLoanDto: CreateOtherLoanDto): Promise<OtherLoan> {
    return this.otherLoansService.create(createOtherLoanDto);
  }

  @Get()
  async findAll(): Promise<OtherLoan[]> {
    return this.otherLoansService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: Guid): Promise<OtherLoan> {
    return this.otherLoansService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: Guid, @Body() updateOtherLoanDto: UpdateOtherLoanDto): Promise<OtherLoan> {
    return this.otherLoansService.update(id, updateOtherLoanDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Guid): Promise<void> {
    return this.otherLoansService.remove(id);
  }
}
