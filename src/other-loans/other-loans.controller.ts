import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OtherLoansService } from './other-loans.service';
import { CreateOtherLoanDto } from './dto/create-other-loan.dto';
import { UpdateOtherLoanDto } from './dto/update-other-loan.dto';
import { Guid } from 'guid-typescript'

@Controller('other-loans')
export class OtherLoansController {
  constructor(private readonly otherLoansService: OtherLoansService) {}

  @Post()
  create(@Body() createOtherLoanDto: CreateOtherLoanDto) {
    return this.otherLoansService.create(createOtherLoanDto);
  }

  @Get()
  findAll() {
    return this.otherLoansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Guid) {
    return this.otherLoansService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: Guid, @Body() updateOtherLoanDto: UpdateOtherLoanDto) {
    return this.otherLoansService.update(id, updateOtherLoanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Guid) {
    return this.otherLoansService.remove(id);
  }
}
