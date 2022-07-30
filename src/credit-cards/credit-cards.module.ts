import { Module } from '@nestjs/common';
import { CreditCardsService } from './credit-cards.service';
import { CreditCardsController } from './credit-cards.controller';
import { creditCardProviders } from './credit-card.provider';

@Module({
  controllers: [CreditCardsController],
  providers: [CreditCardsService, ...creditCardProviders]
})
export class CreditCardsModule {}
