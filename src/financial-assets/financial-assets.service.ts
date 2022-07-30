import { Injectable, Inject } from '@nestjs/common';
import { CreateFinancialAssetDto } from './dto/create-financial-asset.dto';
import { UpdateFinancialAssetDto } from './dto/update-financial-asset.dto';
import { FinancialAsset } from './financial-asset.entity';

@Injectable()
export class FinancialAssetsService {
  constructor(
    @Inject('FINANCIAL_ASSETS_REPOSITORY')
    private model: typeof FinancialAsset
  ) {}

  async create(createFinancialAssetDto: CreateFinancialAssetDto): Promise<FinancialAsset> {
    const object = new FinancialAsset()
    for (const field in createFinancialAssetDto) {
      object[field] = createFinancialAssetDto[field]
    }
    return object.save()
  }

  async findAll(): Promise<FinancialAsset[]> {
    return this.model.findAll<FinancialAsset>()
  }

  async findOne(id: number): Promise<FinancialAsset> {
    return this.model.findOne<FinancialAsset>({
      where: {
        id
      }
    })
  }

  async update(id: number, updateFinancialAssetDto: UpdateFinancialAssetDto): Promise<FinancialAsset> {
    const object = await this.model.findOne({
      where: {
        id
      }
    })
    return await object.update(updateFinancialAssetDto)
  }

  async remove(id: number): Promise<void> {
    await this.model.destroy({
      where: {
        id
      }
    })
  }
}