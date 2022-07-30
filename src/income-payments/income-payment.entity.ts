import { DataTypes } from 'sequelize'
import { Guid } from 'guid-typescript';
import { Table, Column, Model } from 'sequelize-typescript';
import { IncomeSource } from "src/IncomeSource";
import { TimePeriod } from "src/TimePeriod";

@Table
export class IncomePayment extends Model {
    @Column({ type: DataTypes.STRING(64) })
    userid: Guid;
    @Column({ type: DataTypes.STRING(64) })
    applicationid: Guid;
    @Column({ type: DataTypes.STRING(64) })
    applicantid: Guid;
    @Column({ type: DataTypes.INTEGER })
    source: IncomeSource;
    @Column({ type: DataTypes.INTEGER })
    period: TimePeriod;
    @Column
    amount: number;
}
