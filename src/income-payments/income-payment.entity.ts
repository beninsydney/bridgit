import { Table, Column, Model } from 'sequelize-typescript';
import { IncomeSource } from "src/IncomeSource";
import { TimePeriod } from "src/TimePeriod";

@Table
export class IncomePayment extends Model {
    @Column
    userid: number;
    @Column
    applicationid: number;
    @Column
    applicantid: number;
    @Column
    source: IncomeSource;
    @Column
    period: TimePeriod;
    @Column
    amount: number;
}
