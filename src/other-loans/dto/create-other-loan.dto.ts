import { Guid } from 'guid-typescript';

export class CreateOtherLoanDto {
  userid: Guid;
  applicationid: Guid;
  applicantid: Guid;
  description: String;
  liabilityLimit: number;
  amountOwing: number;
  monthlyRepayment: number;
}
