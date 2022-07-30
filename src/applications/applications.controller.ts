import { Injectable, Inject, Scope, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { Guid } from 'guid-typescript'
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { Application } from './application.entity';

@Controller('applications')
@Injectable({ scope: Scope.REQUEST })
export class ApplicationsController {
  constructor(
    @Inject(REQUEST) private readonly request: Request, 
    private readonly applicationsService: ApplicationsService
  ) {}

  @Post()
  async create(@Body() createApplicationDto: CreateApplicationDto): Promise<Application> {
    return this.applicationsService.create(createApplicationDto);
  }

  @Get()
  async findAll(): Promise<Application[]> {
    const user = this.request['user']
    return this.applicationsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: Guid): Promise<Application> {
    return this.applicationsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: Guid, @Body() updateApplicationDto: UpdateApplicationDto): Promise<Application> {
    return this.applicationsService.update(id, updateApplicationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Guid): Promise<void> {
    return this.applicationsService.remove(id);
  }
}
