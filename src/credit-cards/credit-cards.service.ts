import { Injectable, Inject } from '@nestjs/common'
import { CreditCard } from './credit-card.entity'
import { CreateCreditCardDto } from './dto/create-credit-card.dto'
import { UpdateCreditCardDto } from './dto/update-credit-card.dto'
import { Guid } from 'guid-typescript'

@Injectable()
export class CreditCardsService {
  constructor (
    @Inject('CREDIT_CARDS_REPOSITORY')
    private readonly model: typeof CreditCard
  ) {}

  async create (userid: Guid, applicationid: Guid, applicantid: Guid, createCreditCardDto: CreateCreditCardDto): Promise<CreditCard> {
    const object = new CreditCard()
    for (const field in createCreditCardDto) {
      object[field] = createCreditCardDto[field]
    }
    object.userid = userid
    object.applicationid = applicationid
    object.applicantid = applicantid
    return await object.save()
  }

  async findAll (applicationid: Guid): Promise<CreditCard[]> {
    return await this.model.findAll<CreditCard>({
      where: {
        applicationid
      }
    })
  }

  async findOne (applicationid: Guid, id: Guid): Promise<CreditCard> {
    const object = await this.model.findOne<CreditCard>({
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

  async update (applicationid: Guid, id: Guid, updateCreditCardDto: UpdateCreditCardDto): Promise<CreditCard> {
    const object = await this.model.findOne({
      where: {
        id,
        applicationid
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return await object.update(updateCreditCardDto)
  }

  async remove (applicationid: Guid, id: Guid): Promise<void> {
    const affected = await this.model.destroy({
      where: {
        id,
        applicationid
      }
    })
    if (affected === 0) {
      throw new Error('invalid-id')
    }
  }
}
