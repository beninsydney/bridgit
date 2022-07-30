import { Guid } from 'guid-typescript'

export class CreateCarLoanDto {
  userid: Guid
  applicationid: Guid
  applicantid: Guid
  vehicleMake: String
  model: String
  yearPurchased: number
  assetValue: number
  liabilityLimit: number
  amountOwing: number
  monthlyRepayment: number
}
