import { IncomeSource } from '../../enums/IncomeSource'
import { TimePeriod } from '../../enums/TimePeriod'

export class CreateIncomePaymentDto {
  source?: IncomeSource | undefined
  period?: TimePeriod | undefined
  amount?: number | undefined
}
