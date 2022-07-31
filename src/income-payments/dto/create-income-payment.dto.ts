import { IncomeSource } from 'src/IncomeSource'
import { TimePeriod } from 'src/TimePeriod'

export class CreateIncomePaymentDto {
  source?: IncomeSource | undefined
  period?: TimePeriod | undefined
  amount?: number | undefined
}
