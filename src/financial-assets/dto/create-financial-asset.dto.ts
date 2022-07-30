import { Guid } from 'guid-typescript';

export class CreateFinancialAssetDto {
  userid: Guid;
  applicationid: Guid;
  applicantid: Guid;
  amount: number;
  institution: String;
}
