import { Guid } from 'guid-typescript'

export class CreateCreditCardDto {
  userid: Guid
  applicationid: Guid
  applicantid: Guid
  institution: String
  creditLimit: number
  amountOwing: number
}
