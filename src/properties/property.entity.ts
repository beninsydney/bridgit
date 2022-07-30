import { DataTypes } from 'sequelize';
import { Table, Column, Model } from 'sequelize-typescript';
import { Address } from "src/address/address.entity";
import { PropertyOwner } from "src/property-owners/property-owner.entity";
import { DepositMethod } from "../DepositMethods";
import { PropertyType } from "../PropertyType";
import { StampDutyPaymentMethod } from "../StampDutyPaymentMethod";

@Table
export class Property extends Model {
    @Column({ primaryKey: true })
    id: number;
    @Column
    userid: number;
    @Column
    applicationid: number;
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
    @Column
    stampDutyPayment: StampDutyPaymentMethod;
    @Column ({ type: DataTypes.ARRAY(DataTypes.INTEGER) })
    applicantOwnership: PropertyOwner[];
    @Column
    propertyValue: number;
    @Column
    monthlyRentalIncome: number;
    @Column
    amountOwing: number;
    @Column
    mortgageLimit: number;
}
