import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinancialAssetsService } from './financial-assets.service';
import { CreateFinancialAssetDto } from './dto/create-financial-asset.dto';
import { UpdateFinancialAssetDto } from './dto/update-financial-asset.dto';
import { Guid } from 'guid-typescript'
import { FinancialAsset } from './financial-asset.entity';

@Controller('financial-assets')
export class FinancialAssetsController {
  constructor(private readonly financialAssetsService: FinancialAssetsService) {}

  @Post()
  async create(@Body() createFinancialAssetDto: CreateFinancialAssetDto): Promise<FinancialAsset> {
    return this.financialAssetsService.create(createFinancialAssetDto);
  }

  @Get()
  async findAll(): Promise<FinancialAsset[]> {
    return this.financialAssetsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: Guid): Promise<FinancialAsset> {
    return this.financialAssetsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: Guid, @Body() updateFinancialAssetDto: UpdateFinancialAssetDto): Promise<FinancialAsset> {
    return this.financialAssetsService.update(id, updateFinancialAssetDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Guid): Promise<void> {
    return this.financialAssetsService.remove(id);
  }
}
