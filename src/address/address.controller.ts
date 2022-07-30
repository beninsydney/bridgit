import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Guid } from 'guid-typescript'
import { Address } from './address.entity';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  async create(@Body() createAddressDto: CreateAddressDto): Promise<Address> {
    return this.addressService.create(createAddressDto);
  }

  @Get()
  async findAll(): Promise<Address[]> {
    return this.addressService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: Guid): Promise<Address> {
    return this.addressService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: Guid, @Body() updateAddressDto: UpdateAddressDto): Promise<Address> {
    return this.addressService.update(id, updateAddressDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Guid): Promise<void> {
    return this.addressService.remove(id);
  }
}
