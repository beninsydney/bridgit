import { ExpenseType } from 'src/ExpenseType'

export class CreateMonthlyExpenseDto {
  type?: ExpenseType | undefined
  amount?: number | undefined
}
