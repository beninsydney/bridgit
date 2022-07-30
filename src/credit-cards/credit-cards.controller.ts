import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreditCardsService } from './credit-cards.service';
import { CreateCreditCardDto } from './dto/create-credit-card.dto';
import { UpdateCreditCardDto } from './dto/update-credit-card.dto';
import { Guid } from 'guid-typescript'

@Controller('credit-cards')
export class CreditCardsController {
  constructor(private readonly creditCardsService: CreditCardsService) {}

  @Post()
  create(@Body() createCreditCardDto: CreateCreditCardDto) {
    return this.creditCardsService.create(createCreditCardDto);
  }

  @Get()
  findAll() {
    return this.creditCardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Guid) {
    return this.creditCardsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: Guid, @Body() updateCreditCardDto: UpdateCreditCardDto) {
    return this.creditCardsService.update(id, updateCreditCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Guid) {
    return this.creditCardsService.remove(id);
  }
}
