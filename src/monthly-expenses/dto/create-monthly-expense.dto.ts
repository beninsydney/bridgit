import { Guid } from 'guid-typescript';
import { ExpenseType } from 'src/ExpenseType';

export class CreateMonthlyExpenseDto {
  userid: Guid;
  applicationid: Guid;
  applicantid: Guid;
  type: ExpenseType;
  amount: number;
}
