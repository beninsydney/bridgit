import { ExpenseType } from '../../enums/ExpenseType'

export class CreateMonthlyExpenseDto {
  type?: ExpenseType | undefined
  amount?: number | undefined
}
