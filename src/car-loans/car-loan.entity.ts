import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class CarLoan extends Model {
    @Column({ primaryKey: true })
    id: number;
    @Column
    userid: number;
    @Column
    applicationid: number;
    @Column
    applicantid: number;
    @Column
    vehicleMake: String;
    @Column
    model: String;
    @Column
    yearPurchased: number;
    @Column
    assetValue: number;
    @Column
    liabilityLimit: number;
    @Column
    amountOwing: number;
    @Column
    monthlyRepayment: number;
}
