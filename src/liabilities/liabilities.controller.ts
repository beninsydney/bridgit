import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LiabilitiesService } from './liabilities.service';
import { CreateLiabilityDto } from './dto/create-liability.dto';
import { UpdateLiabilityDto } from './dto/update-liability.dto';
import { Guid } from 'guid-typescript'
import { Liability } from './liability.entity';

@Controller('liabilities')
export class LiabilitiesController {
  constructor(private readonly liabilitiesService: LiabilitiesService) {}

  @Post()
  async create(@Body() createLiabilityDto: CreateLiabilityDto): Promise<Liability> {
    return this.liabilitiesService.create(createLiabilityDto);
  }

  @Get()
  async findAll(): Promise<Liability[]> {
    return this.liabilitiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: Guid): Promise<Liability> {
    return this.liabilitiesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: Guid, @Body() updateLiabilityDto: UpdateLiabilityDto): Promise<Liability> {
    return this.liabilitiesService.update(id, updateLiabilityDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Guid): Promise<void> {
    return this.liabilitiesService.remove(id);
  }
}
