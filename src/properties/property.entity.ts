import { DataTypes } from 'sequelize'
import { Guid } from 'guid-typescript';
import { Table, Column, Model } from 'sequelize-typescript';
import { Address } from "src/address/address.entity";
import { PropertyOwner } from "src/property-owners/property-owner.entity";
import { DepositMethod } from "../DepositMethods";
import { PropertyType } from "../PropertyType";
import { StampDutyPaymentMethod } from "../StampDutyPaymentMethod";

@Table
export class Property extends Model {
    @Column({ primaryKey: true, type: DataTypes.STRING(64) })
    id: Guid;
    @Column({ type: DataTypes.STRING(64) })
    userid: Guid;
    @Column({ type: DataTypes.STRING(64) })
    applicationid: Guid;
    @Column ({ type: DataTypes.INTEGER })
    type: PropertyType;
    @Column
    beenListedForSale: boolean;
    @Column
    isSold: boolean;
    @Column
    estimatedPropertyPrice: number;
    @Column
    hasMortgage: boolean;
    @Column
    outstandingMortgageAmount: number;
    @Column ({ type: DataTypes.INTEGER })
    address: Address;
    @Column
    depositAmount: number;
    @Column
    purchasePrice: number;
    @Column({ type: DataTypes.DATEONLY })
    purchaseDate: Date;
    @Column ({ type: DataTypes.INTEGER })
    depositPayment: DepositMethod;
    @Column ({ type: DataTypes.INTEGER })
    stampDutyPayment: StampDutyPaymentMethod;
    @Column
    propertyValue: number;
    @Column
    monthlyRentalIncome: number;
    @Column
    amountOwing: number;
    @Column
    mortgageLimit: number;
}
