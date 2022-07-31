import { AdditionalFundsReason } from '../../enums/AdditionalFundsReason'
import { LoanPurpose } from '../../enums/LoanPurpose'

export class CreateApplicationDto {
  loanPurpose?: LoanPurpose | undefined
  savingsContribution?: number | undefined
  giftedSavingsAmount?: number | undefined
  additionalFundsRequest?: number | undefined
  additionalFundsReason?: AdditionalFundsReason | undefined
  additionalFundsNote?: string
}
