import { Guid } from 'guid-typescript'

export class CreateLiabilityDto {
  creditCards?: Guid[] | undefined
  carLoans?: Guid[] | undefined
  otherLoans?: Guid[] | undefined
}
