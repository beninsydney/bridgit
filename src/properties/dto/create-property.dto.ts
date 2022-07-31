import { Guid } from 'guid-typescript'
import { DepositMethod } from 'src/DepositMethods'
import { PropertyType } from 'src/PropertyType'
import { StampDutyPaymentMethod } from 'src/StampDutyPaymentMethod'

export class CreatePropertyDto {
  type?: PropertyType | undefined
  beenListedForSale?: boolean | undefined
  isSold?: boolean | undefined
  estimatedPropertyPrice?: number | undefined
  hasMortgage?: boolean | undefined
  outstandingMortgageAmount?: number | undefined
  address?: Guid | undefined
  depositAmount?: number | undefined
  purchasePrice?: number | undefined
  purchaseDate?: Date | undefined
  depositPayment?: DepositMethod | undefined
  stampDutyPayment?: StampDutyPaymentMethod | undefined
  propertyValue?: number | undefined
  monthlyRentalIncome?: number | undefined
  amountOwing?: number | undefined
  mortgageLimit?: number | undefined
}
