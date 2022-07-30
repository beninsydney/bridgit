import { Injectable } from '@nestjs/common';
import { CreateFinancialAssetDto } from './dto/create-financial-asset.dto';
import { UpdateFinancialAssetDto } from './dto/update-financial-asset.dto';

@Injectable()
export class FinancialAssetsService {
  create(createFinancialAssetDto: CreateFinancialAssetDto) {
    return 'This action adds a new financialAsset';
  }

  findAll() {
    return `This action returns all financialAssets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financialAsset`;
  }

  update(id: number, updateFinancialAssetDto: UpdateFinancialAssetDto) {
    return `This action updates a #${id} financialAsset`;
  }

  remove(id: number) {
    return `This action removes a #${id} financialAsset`;
  }
}
