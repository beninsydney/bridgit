import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { Guid } from 'guid-typescript'
import { Asset } from './asset.entity';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Post()
  async create(@Body() createAssetDto: CreateAssetDto): Promise<Asset> {
    return this.assetsService.create(createAssetDto);
  }

  @Get()
  async findAll(): Promise<Asset[]> {
    return this.assetsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: Guid): Promise<Asset> {
    return this.assetsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: Guid, @Body() updateAssetDto: UpdateAssetDto): Promise<Asset> {
    return this.assetsService.update(id, updateAssetDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Guid): Promise<void> {
    return this.assetsService.remove(id);
  }
}
