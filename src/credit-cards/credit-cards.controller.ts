import { Injectable, Inject, Scope, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ApplicantsService } from 'src/applicants/applicants.service'
import { CreditCardsService } from './credit-cards.service'
import { CreateCreditCardDto } from './dto/create-credit-card.dto'
import { UpdateCreditCardDto } from './dto/update-credit-card.dto'
import { Guid } from 'guid-typescript'
import { CreditCard } from './credit-card.entity'
import { REQUEST } from '@nestjs/core'
import { Applicant } from 'src/applicants/applicant.entity'

@Controller('credit-cards')
@Injectable({ scope: Scope.REQUEST })
export class CreditCardsController {
  private readonly applicantsService: ApplicantsService
  constructor (
    @Inject(REQUEST) private readonly request: Record<string, any>,
    private readonly creditCardsService: CreditCardsService
  ) {
    this.applicantsService = new ApplicantsService(Applicant)
  }

  @Post()
  async create (@Body() body: Record<string, any>): Promise<CreditCard> {
    const { user, application } = this.request
    const applicant = await this.applicantsService.findOne(application.id, body.applicantid)
    return await this.creditCardsService.create(user.id, application.id, applicant.id, body as CreateCreditCardDto)
  }

  @Get()
  async findAll (): Promise<CreditCard[]> {
    return await this.creditCardsService.findAll(this.request.application.id)
  }

  @Get(':id')
  async findOne (@Param('id') id: Guid): Promise<CreditCard> {
    const { application } = this.request
    return await this.creditCardsService.findOne(application.id, id)
  }

  @Patch(':id')
  async update (@Param('id') id: Guid, @Body() updateCreditCardDto: UpdateCreditCardDto): Promise<CreditCard> {
    const { application } = this.request
    return await this.creditCardsService.update(application.id, id, updateCreditCardDto)
  }

  @Delete(':id')
  async remove (@Param('id') id: Guid): Promise<void> {
    const { application } = this.request
    return await this.creditCardsService.remove(application.id, id)
  }
}
