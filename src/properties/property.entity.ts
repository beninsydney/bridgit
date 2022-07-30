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
    @Column ({ type: DataTypes.NUMBER })
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
    @Column ({ type: DataTypes.NUMBER })
    address: Address;
    @Column
    depositAmount: number;
    @Column
    purchasePrice: number;
    @Column
    purchaseDate: Date;
    @Column ({ type: DataTypes.NUMBER })
    depositPayment: DepositMethod;
    @Column
    stampDutyPayment: StampDutyPaymentMethod;
    @Column ({ type: DataTypes.ARRAY(DataTypes.NUMBER) })
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
