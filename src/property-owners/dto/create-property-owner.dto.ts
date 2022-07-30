import { Guid } from 'guid-typescript';

export class CreatePropertyOwnerDto {
  applicantid: Guid;
  propertyid: Guid;
  percent: number;
}
