import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertyOwnersService } from './property-owners.service';
import { CreatePropertyOwnerDto } from './dto/create-property-owner.dto';
import { UpdatePropertyOwnerDto } from './dto/update-property-owner.dto';
import { Guid } from 'guid-typescript'

@Controller('property-owners')
export class PropertyOwnersController {
  constructor(private readonly propertyOwnersService: PropertyOwnersService) {}

  @Post()
  create(@Body() createPropertyOwnerDto: CreatePropertyOwnerDto) {
    return this.propertyOwnersService.create(createPropertyOwnerDto);
  }

  @Get()
  findAll() {
    return this.propertyOwnersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Guid) {
    return this.propertyOwnersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: Guid, @Body() updatePropertyOwnerDto: UpdatePropertyOwnerDto) {
    return this.propertyOwnersService.update(id, updatePropertyOwnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Guid) {
    return this.propertyOwnersService.remove(id);
  }
}
