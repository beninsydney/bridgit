import { CreditCard } from './credit-card.entity'

export const creditCardProviders = [
  {
    provide: 'CREDIT_CARDS_REPOSITORY',
    useValue: CreditCard
  }
]
