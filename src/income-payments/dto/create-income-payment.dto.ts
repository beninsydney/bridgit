import { Guid } from 'guid-typescript'
import { IncomeSource } from 'src/IncomeSource'
import { TimePeriod } from 'src/TimePeriod'

export class CreateIncomePaymentDto {
  userid: Guid
  applicationid: Guid
  applicantid: Guid
  source: IncomeSource
  period: TimePeriod
  amount: number
}
