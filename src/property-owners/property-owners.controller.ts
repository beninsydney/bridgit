import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertyOwnersService } from './property-owners.service';
import { CreatePropertyOwnerDto } from './dto/create-property-owner.dto';
import { UpdatePropertyOwnerDto } from './dto/update-property-owner.dto';
import { Guid } from 'guid-typescript'
import { PropertyOwner } from './property-owner.entity';

@Controller('property-owners')
export class PropertyOwnersController {
  constructor(private readonly propertyOwnersService: PropertyOwnersService) {}

  @Post()
  async create(@Body() createPropertyOwnerDto: CreatePropertyOwnerDto): Promise<PropertyOwner> {
    return this.propertyOwnersService.create(createPropertyOwnerDto);
  }

  @Get()
  async findAll(): Promise<PropertyOwner[]> {
    return this.propertyOwnersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: Guid): Promise<PropertyOwner> {
    return this.propertyOwnersService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: Guid, @Body() updatePropertyOwnerDto: UpdatePropertyOwnerDto): Promise<PropertyOwner> {
    return this.propertyOwnersService.update(id, updatePropertyOwnerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Guid): Promise<void> {
    return this.propertyOwnersService.remove(id);
  }
}
