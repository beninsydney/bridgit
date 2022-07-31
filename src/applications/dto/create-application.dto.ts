import { AdditionalFundsReason } from 'src/AdditionalFundsReason'
import { LoanPurpose } from 'src/LoanPurpose'

export class CreateApplicationDto {
  loanPurpose?: LoanPurpose | undefined
  savingsContribution?: number | undefined
  giftedSavingsAmount?: number | undefined
  additionalFundsRequest?: number | undefined
  additionalFundsReason?: AdditionalFundsReason | undefined
  additionalFundsNote?: string
}
