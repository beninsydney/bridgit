import { IncomePayment } from './income-payment.entity'

export const incomePaymentProviders = [
  {
    provide: 'INCOME_PAYMENTS_REPOSITORY',
    useValue: IncomePayment
  }
]
