import { Injectable, Inject } from '@nestjs/common';
import { Asset } from './asset.entity';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { Guid } from 'guid-typescript'

@Injectable()
export class AssetsService {
  constructor(
    @Inject('ASSETS_REPOSITORY')
    private model: typeof Asset
  ) {}

  async create(createAssetDto: CreateAssetDto): Promise<Asset> {
    const object = new Asset()
    for (const field in createAssetDto) {
      object[field] = createAssetDto[field]
    }
    return object.save()
  }

  async findAll(): Promise<Asset[]> {
    return this.model.findAll<Asset>()
  }

  async findOne(id: Guid): Promise<Asset> {
    return this.model.findOne<Asset>({
      where: {
        id
      }
    })
  }

  async update(id: Guid, updateAssetDto: UpdateAssetDto): Promise<Asset> {
    const object = await this.model.findOne({
      where: {
        id
      }
    })
    return await object.update(updateAssetDto)
  }

  async remove(id: Guid): Promise<void> {
    await this.model.destroy({
      where: {
        id
      }
    })
  }
}