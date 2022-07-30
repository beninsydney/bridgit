import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Guid } from 'guid-typescript'
import { Property } from './property.entity';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Post()
  async create(@Body() createPropertyDto: CreatePropertyDto): Promise<Property> {
    return this.propertiesService.create(createPropertyDto);
  }

  @Get()
  async findAll(): Promise<Property[]> {
    return this.propertiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: Guid): Promise<Property> {
    return this.propertiesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: Guid, @Body() updatePropertyDto: UpdatePropertyDto): Promise<Property> {
    return this.propertiesService.update(id, updatePropertyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Guid): Promise<void> {
    return this.propertiesService.remove(id);
  }
}
