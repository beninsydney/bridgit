import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class FinancialAsset extends Model {
    @Column({ primaryKey: true })
    id: number;
    @Column
    userid: number;
    @Column
    applicationid: number;
    @Column
    applicantid: number;
    @Column
    amount: number;
    @Column
    instution: String;
}
