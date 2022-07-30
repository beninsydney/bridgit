import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinancialAssetsService } from './financial-assets.service';
import { CreateFinancialAssetDto } from './dto/create-financial-asset.dto';
import { UpdateFinancialAssetDto } from './dto/update-financial-asset.dto';
import { Guid } from 'guid-typescript'

@Controller('financial-assets')
export class FinancialAssetsController {
  constructor(private readonly financialAssetsService: FinancialAssetsService) {}

  @Post()
  create(@Body() createFinancialAssetDto: CreateFinancialAssetDto) {
    return this.financialAssetsService.create(createFinancialAssetDto);
  }

  @Get()
  findAll() {
    return this.financialAssetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Guid) {
    return this.financialAssetsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: Guid, @Body() updateFinancialAssetDto: UpdateFinancialAssetDto) {
    return this.financialAssetsService.update(id, updateFinancialAssetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Guid) {
    return this.financialAssetsService.remove(id);
  }
}
