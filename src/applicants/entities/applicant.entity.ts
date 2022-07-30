import { Address } from "src/address/entities/address.entity";
import { Gender } from "src/Gender";
import { IncomePayment } from "src/income-payments/entities/income-payment.entity";
import { MonthlyExpense } from "src/monthly-expenses/entities/monthly-expense.entity";
import { Relationship } from "src/Relationship";
import { RelationshipStatus } from "src/RelationshipStatus";

export class Applicant {
    id: number;
    userid: number;
    applicationid: number;
    relationship: Enumerator<Relationship>;
    relationshipNote: string;
    firstName: string;
    middleName: string;
    lastName: string;
    preferredName: string;
    gender: Enumerator<Gender>;
    genderNote: string;
    dateOfBirth: Date;
    mobilePhone: string;
    email: string;
    address: Address;
    incomePayments: IncomePayment[];
    incomeChanging: boolean;
    incomeChangingNote: String;
    relationshipStatus: Enumerator<RelationshipStatus>;
    dependents: number;
    monthlyExpenses: MonthlyExpense[];
    monthlyExpensesChanging: boolean;
    monthlyExpensesChangingAmount: number;
}
