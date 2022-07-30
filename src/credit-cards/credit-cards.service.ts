import { Injectable, Inject } from '@nestjs/common';
import { CreditCard } from './credit-card.entity';
import { CreateCreditCardDto } from './dto/create-credit-card.dto';
import { UpdateCreditCardDto } from './dto/update-credit-card.dto';
import { Guid } from 'guid-typescript'

@Injectable()
export class CreditCardsService {
  constructor(
    @Inject('CREDIT_CARDS_REPOSITORY')
    private model: typeof CreditCard
  ) {}

  async create(createCreditCardDto: CreateCreditCardDto): Promise<CreditCard> {
    const object = new CreditCard()
    for (const field in createCreditCardDto) {
      object[field] = createCreditCardDto[field]
    }
    return object.save()
  }

  async findAll(): Promise<CreditCard[]> {
    return this.model.findAll<CreditCard>()
  }

  async findOne(id: Guid): Promise<CreditCard> {
    return this.model.findOne<CreditCard>({
      where: {
        id
      }
    })
  }

  async update(id: Guid, updateCreditCardDto: UpdateCreditCardDto): Promise<CreditCard> {
    const object = await this.model.findOne({
      where: {
        id
      }
    })
    return await object.update(updateCreditCardDto)
  }

  async remove(id: Guid): Promise<void> {
    await this.model.destroy({
      where: {
        id
      }
    })
  }
}