import { DataTypes } from 'sequelize';
import { Table, Column, Model } from 'sequelize-typescript';
import { CarLoan } from "src/car-loans/car-loan.entity";
import { CreditCard } from "src/credit-cards/credit-card.entity";
import { OtherLoan } from "src/other-loans/other-loan.entity";

@Table
export class Liability extends Model {
    @Column({ primaryKey: true })
    id: number;
    @Column
    userid: number;
    @Column
    applicationid: number;
    @Column
    applicantid: number;
    @Column ({ type: DataTypes.ARRAY(DataTypes.INTEGER) })
    creditCards: CreditCard[];
    @Column ({ type: DataTypes.ARRAY(DataTypes.INTEGER) })
    carLoans: CarLoan[];
    @Column ({ type: DataTypes.ARRAY(DataTypes.INTEGER) })
    otherLoans: OtherLoan[];
}
