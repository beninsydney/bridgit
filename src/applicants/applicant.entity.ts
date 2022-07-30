import { Table, Column, Model } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Address } from "src/address/address.entity";
import { Gender } from "src/Gender";
import { IncomePayment } from "src/income-payments/income-payment.entity";
import { MonthlyExpense } from "src/monthly-expenses/monthly-expense.entity";
import { Relationship } from "src/Relationship";
import { RelationshipStatus } from "src/RelationshipStatus";

@Table
export class Applicant extends Model {
    @Column({ primaryKey: true })
    id: number;
    @Column
    userid: number;
    @Column
    applicationid: number;
    @Column ({ type: DataTypes.INTEGER })
    relationship: Relationship;
    @Column
    relationshipNote: string;
    @Column
    firstName: string;
    @Column
    middleName: string;
    @Column
    lastName: string;
    @Column
    preferredName: string;
    @Column
    gender: Gender;
    @Column
    genderNote: string;
    @Column({ type: DataTypes.DATEONLY })
    dateOfBirth: Date;
    @Column
    mobilePhone: string;
    @Column
    email: string;
    @Column ({ type: DataTypes.INTEGER })
    address: Address;
    @Column ({ type: DataTypes.ARRAY(DataTypes.INTEGER) })
    incomePayments: IncomePayment[];
    @Column
    incomeChanging: boolean;
    @Column
    incomeChangingNote: String;
    @Column
    relationshipStatus: RelationshipStatus;
    @Column
    dependents: number;
    @Column ({ type: DataTypes.ARRAY(DataTypes.INTEGER) })
    monthlyExpenses: MonthlyExpense[];
    @Column
    monthlyExpensesChanging: boolean;
    @Column
    monthlyExpensesChangingAmount: number;
}
