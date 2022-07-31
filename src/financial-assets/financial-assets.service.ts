import { Injectable, Inject } from '@nestjs/common'
import { CreateFinancialAssetDto } from './dto/create-financial-asset.dto'
import { UpdateFinancialAssetDto } from './dto/update-financial-asset.dto'
import { FinancialAsset } from './financial-asset.entity'
import { Guid } from 'guid-typescript'

@Injectable()
export class FinancialAssetsService {
  constructor (
    @Inject('FINANCIAL_ASSETS_REPOSITORY')
    private readonly model: typeof FinancialAsset
  ) {}

  async create (userid: Guid, applicationid: Guid, applicantid: Guid, createFinancialAssetDto: CreateFinancialAssetDto): Promise<FinancialAsset> {
    const object = new FinancialAsset()
    for (const field in createFinancialAssetDto) {
      object[field] = createFinancialAssetDto[field]
    }
    object.userid = userid
    object.applicationid = applicationid
    object.applicantid = applicantid
    return await object.save()
  }

  async findAll (applicationid: Guid): Promise<FinancialAsset[]> {
    return await this.model.findAll<FinancialAsset>({
      where: {
        applicationid
      }
    })
  }

  async findOne (applicationid: Guid, id: Guid): Promise<FinancialAsset> {
    const object = await this.model.findOne<FinancialAsset>({
      where: {
        id: id.toString(),
        applicationid: applicationid.toString()
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return object
  }

  async update (applicationid: Guid, id: Guid, updateFinancialAssetDto: UpdateFinancialAssetDto): Promise<FinancialAsset> {
    const object = await this.model.findOne({
      where: {
        id: id.toString(),
        applicationid: applicationid.toString()
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return await object.update(updateFinancialAssetDto)
  }

  async remove (applicationid: Guid, id: Guid): Promise<void> {
    const affected = await this.model.destroy({
      where: {
        id: id.toString(),
        applicationid: applicationid.toString()
      }
    })
    if (affected === 0) {
      throw new Error('invalid-id')
    }
  }
}
