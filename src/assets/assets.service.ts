import { Injectable, Inject } from '@nestjs/common'
import { Asset } from './asset.entity'
import { CreateAssetDto } from './dto/create-asset.dto'
import { UpdateAssetDto } from './dto/update-asset.dto'
import { Guid } from 'guid-typescript'

@Injectable()
export class AssetsService {
  constructor (
    @Inject('ASSETS_REPOSITORY')
    private readonly model: typeof Asset
  ) {}

  async create (userid: Guid, applicationid: Guid, applicantid: Guid, createAssetDto: CreateAssetDto): Promise<Asset> {
    const object = new Asset()
    for (const field in createAssetDto) {
      object[field] = createAssetDto[field]
    }
    object.userid = userid
    object.applicationid = applicationid
    object.applicantid = applicantid
    return await object.save()
  }

  async findAll (applicationid: Guid): Promise<Asset[]> {
    return await this.model.findAll<Asset>({
      where: {
        applicationid
      }
    })
  }

  async findOne (applicationid: Guid, id: Guid): Promise<Asset> {
    const object = await this.model.findOne<Asset>({
      where: {
        id,
        applicationid
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return object
  }

  async update (applicationid: Guid, id: Guid, updateAssetDto: UpdateAssetDto): Promise<Asset> {
    const object = await this.model.findOne({
      where: {
        id,
        applicationid
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return await object.update(updateAssetDto)
  }

  async remove (applicationid: Guid, id: Guid): Promise<void> {
    const affected = await this.model.destroy({
      where: {
        id
      }
    })
    if (affected === 0) {
      throw new Error('invalid-id')
    }
  }
}
