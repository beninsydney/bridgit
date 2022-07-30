import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class OtherLoan extends Model {
    @Column({ primaryKey: true })
    id: number;
    @Column
    userid: number;
    @Column
    applicationid: number;
    @Column
    applicantid: number;
    @Column
    description: String;
    @Column
    liabilityLimit: number;
    @Column
    amountOwing: number;
    @Column
    monthlyRepayment: number;
}
