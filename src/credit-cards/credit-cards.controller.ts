import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreditCardsService } from './credit-cards.service';
import { CreateCreditCardDto } from './dto/create-credit-card.dto';
import { UpdateCreditCardDto } from './dto/update-credit-card.dto';
import { Guid } from 'guid-typescript'
import { CreditCard } from './credit-card.entity';

@Controller('credit-cards')
export class CreditCardsController {
  constructor(private readonly creditCardsService: CreditCardsService) {}

  @Post()
  async create(@Body() createCreditCardDto: CreateCreditCardDto): Promise<CreditCard> {
    return this.creditCardsService.create(createCreditCardDto);
  }

  @Get()
  async findAll(): Promise<CreditCard[]> {
    return this.creditCardsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: Guid): Promise<CreditCard> {
    return this.creditCardsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: Guid, @Body() updateCreditCardDto: UpdateCreditCardDto): Promise<CreditCard> {
    return this.creditCardsService.update(id, updateCreditCardDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Guid): Promise<void> {
    return this.creditCardsService.remove(id);
  }
}
