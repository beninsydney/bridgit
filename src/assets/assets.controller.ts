import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { Guid } from 'guid-typescript'

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Post()
  create(@Body() createAssetDto: CreateAssetDto) {
    return this.assetsService.create(createAssetDto);
  }

  @Get()
  findAll() {
    return this.assetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Guid) {
    return this.assetsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: Guid, @Body() updateAssetDto: UpdateAssetDto) {
    return this.assetsService.update(id, updateAssetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Guid) {
    return this.assetsService.remove(id);
  }
}
