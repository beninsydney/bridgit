import { DataTypes } from 'sequelize'
import { Guid } from 'guid-typescript';
import { Table, Column, Model } from 'sequelize-typescript';
import { CarLoan } from "src/car-loans/car-loan.entity";
import { CreditCard } from "src/credit-cards/credit-card.entity";
import { OtherLoan } from "src/other-loans/other-loan.entity";

@Table
export class Liability extends Model {
    @Column({ primaryKey: true, type: DataTypes.STRING(64) })
    id: Guid;
    @Column({ type: DataTypes.STRING(64) })
    userid: Guid;
    @Column({ type: DataTypes.STRING(64) })
    applicationid: Guid;
    @Column({ type: DataTypes.STRING(64) })
    applicantid: Guid;
    @Column ({ type: DataTypes.ARRAY(DataTypes.STRING(64)) })
    creditCards: CreditCard[];
    @Column ({ type: DataTypes.ARRAY(DataTypes.STRING(64)) })
    carLoans: CarLoan[];
    @Column ({ type: DataTypes.ARRAY(DataTypes.STRING(64)) })
    otherLoans: OtherLoan[];
}
