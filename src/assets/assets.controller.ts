import { Injectable, Inject, Scope, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ApplicantsService } from 'src/applicants/applicants.service'
import { AssetsService } from './assets.service'
import { CreateAssetDto } from './dto/create-asset.dto'
import { UpdateAssetDto } from './dto/update-asset.dto'
import { Guid } from 'guid-typescript'
import { Asset } from './asset.entity'
import { REQUEST } from '@nestjs/core'
import { Applicant } from 'src/applicants/applicant.entity'

@Controller('assets')
@Injectable({ scope: Scope.REQUEST })
export class AssetsController {
  private readonly applicantsService: ApplicantsService
  constructor (
    @Inject(REQUEST) private readonly request: Record<string, any>,
    private readonly assetsService: AssetsService
  ) {
    this.applicantsService = new ApplicantsService(Applicant)
  }

  @Post()
  async create (@Body() body: Record<string, any>): Promise<Asset> {
    const { user, application } = this.request
    const applicant = await this.applicantsService.findOne(application.id, body.applicantid)
    return await this.assetsService.create(user.id, application.id, applicant.id, body as CreateAssetDto)
  }

  @Get()
  async findAll (): Promise<Asset[]> {
    return await this.assetsService.findAll(this.request.application.id)
  }

  @Get(':id')
  async findOne (@Param('id') id: Guid): Promise<Asset> {
    const { application } = this.request
    return await this.assetsService.findOne(application.id, id)
  }

  @Patch(':id')
  async update (@Param('id') id: Guid, @Body() updateAssetDto: UpdateAssetDto): Promise<Asset> {
    const { application } = this.request
    return await this.assetsService.update(application.id, id, updateAssetDto)
  }

  @Delete(':id')
  async remove (@Param('id') id: Guid): Promise<void> {
    const { application } = this.request
    return await this.assetsService.remove(application.id, id)
  }
}
