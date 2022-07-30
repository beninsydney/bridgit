import { Injectable, Inject, Scope, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicantsService } from './applicants.service';import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { Guid } from 'guid-typescript'
import { REQUEST } from '@nestjs/core';
import { Applicant } from './applicant.entity';

@Controller('applicants')
@Injectable({ scope: Scope.REQUEST })
export class ApplicantsController {
  constructor(
    @Inject(REQUEST) private readonly request, 
    private readonly applicantsService: ApplicantsService
  ) {}

  @Post()
  async create(@Body() createApplicantDto: CreateApplicantDto): Promise<Applicant> {

    createApplicantDto.userid = this.request.user.id;
    createApplicantDto.applicationid = this.request.application.id;
    return this.applicantsService.create(createApplicantDto);
  }

  @Get()
  async findAll(): Promise<Applicant[]> {
    return this.applicantsService.findAll(this.request.application.id);
  }

  @Get(':id')
  async findOne(@Param('id') id: Guid): Promise<Applicant> {
    return this.applicantsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: Guid, @Body() updateApplicantDto: UpdateApplicantDto): Promise<Applicant> {
    return this.applicantsService.update(id, updateApplicantDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Guid): Promise<void> {
    return this.applicantsService.remove(id);
  }
}
