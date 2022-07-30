import { Guid } from 'guid-typescript'
import { DepositMethod } from 'src/DepositMethods'
import { PropertyType } from 'src/PropertyType'
import { StampDutyPaymentMethod } from 'src/StampDutyPaymentMethod'

export class CreatePropertyDto {
  userid: Guid
  applicationid: Guid
  type: PropertyType
  beenListedForSale: boolean
  isSold: boolean
  estimatedPropertyPrice: number
  hasMortgage: boolean
  outstandingMortgageAmount: number
  address: Guid
  depositAmount: number
  purchasePrice: number
  purchaseDate: Date
  depositPayment: DepositMethod
  stampDutyPayment: StampDutyPaymentMethod
  propertyValue: number
  monthlyRentalIncome: number
  amountOwing: number
  mortgageLimit: number
}
