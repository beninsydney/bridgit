import { Guid } from 'guid-typescript';
import { AdditionalFundsReason } from 'src/AdditionalFundsReason';
import { LoanPurpose } from 'src/LoanPurpose';

export class CreateApplicationDto {
  userid: Guid;
  loanPurpose: LoanPurpose;
  savingsContribution: number;
  giftedSavingsAmount: number;
  additionalFundsRequest: number;
  additionalFundsReason: AdditionalFundsReason;
  additionalFundsNote: string;
}
