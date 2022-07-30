import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class CreditCard extends Model {
    @Column({ primaryKey: true })
    id: number;
    @Column
    userid: number;
    @Column
    applicationid: number;
    @Column
    applicantid: number;
    @Column
    institution: String;
    @Column
    creditLimit: number;
    @Column
    amountOwing: number;
}
