import { Guid } from 'guid-typescript';

export class CreateAssetDto {
  userid: Guid;
  applicationid: Guid;
  applicantid: Guid;
  properties: Guid[];
  savings: Guid[];
  shares: Guid[];
  superannuation: Guid[];
}
