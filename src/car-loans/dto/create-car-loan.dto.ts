export class CreateCarLoanDto {
  vehicleMake?: String
  model?: String
  yearPurchased?: number | undefined
  assetValue?: number | undefined
  liabilityLimit?: number | undefined
  amountOwing?: number | undefined
  monthlyRepayment?: number | undefined
}
