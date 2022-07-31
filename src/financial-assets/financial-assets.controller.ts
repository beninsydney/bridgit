import { Injectable, Inject, Scope, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ApplicantsService } from 'src/applicants/applicants.service'
import { FinancialAssetsService } from './financial-assets.service'
import { CreateFinancialAssetDto } from './dto/create-financial-asset.dto'
import { UpdateFinancialAssetDto } from './dto/update-financial-asset.dto'
import { Guid } from 'guid-typescript'
import { FinancialAsset } from './financial-asset.entity'
import { REQUEST } from '@nestjs/core'
import { Applicant } from 'src/applicants/applicant.entity'

@Controller('financial-assets')
@Injectable({ scope: Scope.REQUEST })
export class FinancialAssetsController {
  private readonly applicantsService: ApplicantsService
  constructor (
    @Inject(REQUEST) private readonly request: Record<string, any>,
    private readonly financialAssetsService: FinancialAssetsService
  ) {
    this.applicantsService = new ApplicantsService(Applicant)
  }

  @Post()
  async create (@Body() body: Record<string, any>): Promise<FinancialAsset> {
    const { user, application } = this.request
    const applicant = await this.applicantsService.findOne(application.id, body.applicantid)
    return await this.financialAssetsService.create(user.id, application.id, applicant.id, body as CreateFinancialAssetDto)
  }

  @Get()
  async findAll (): Promise<FinancialAsset[]> {
    return await this.financialAssetsService.findAll(this.request.application.id)
  }

  @Get(':id')
  async findOne (@Param('id') id: Guid): Promise<FinancialAsset> {
    const { application } = this.request
    return await this.financialAssetsService.findOne(application.id, id)
  }

  @Patch(':id')
  async update (@Param('id') id: Guid, @Body() updateFinancialAssetDto: UpdateFinancialAssetDto): Promise<FinancialAsset> {
    const { application } = this.request
    return await this.financialAssetsService.update(application.id, id, updateFinancialAssetDto)
  }

  @Delete(':id')
  async remove (@Param('id') id: Guid): Promise<void> {
    const { application } = this.request
    return await this.financialAssetsService.remove(application.id, id)
  }
}
