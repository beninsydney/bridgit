import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicantsService } from './applicants.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { Guid } from 'guid-typescript'

@Controller('applicants')
export class ApplicantsController {
  constructor(private readonly applicantsService: ApplicantsService) {}

  @Post()
  create(@Body() createApplicantDto: CreateApplicantDto) {
    return this.applicantsService.create(createApplicantDto);
  }

  @Get()
  findAll() {
    return this.applicantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Guid) {
    return this.applicantsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: Guid, @Body() updateApplicantDto: UpdateApplicantDto) {
    return this.applicantsService.update(id, updateApplicantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Guid) {
    return this.applicantsService.remove(id);
  }
}
