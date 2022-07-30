import { Table, Column, Model } from 'sequelize-typescript';
import { ExpenseType } from "src/ExpenseType";

@Table
export class MonthlyExpense extends Model {
    @Column({ primaryKey: true })
    id: number;
    @Column
    userid: number;
    @Column
    applicationid: number;
    @Column
    applicantid: number;
    @Column({ type: DataTypes.INTEGER })
    type: ExpenseType;
    @Column
    amount: number;
}
