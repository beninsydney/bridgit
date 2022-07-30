import { ExpenseType } from "src/ExpenseType";

export class MonthlyExpense {
    id: number;
    userid: number;
    applicationid: number;
    applicantid: number;
    type: Enumerator<ExpenseType>;
    amount: number;
}
