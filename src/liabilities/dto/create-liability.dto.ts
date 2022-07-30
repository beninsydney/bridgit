import { Guid } from 'guid-typescript';

export class CreateLiabilityDto {
  userid: Guid;
  applicationid: Guid;
  applicantid: Guid;
  creditCards: Guid[];
  carLoans: Guid[];
  otherLoans: Guid[];
}
