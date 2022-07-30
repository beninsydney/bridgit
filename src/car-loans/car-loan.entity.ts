import { DataTypes } from 'sequelize'
import { Guid } from 'guid-typescript';
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class CarLoan extends Model {
    @Column({ 
        primaryKey: true, 
        type: DataTypes.STRING(64), 
        defaultValue: () => { 
            return Guid.create().toString() 
        } 
    })
    id!: Guid;
    @Column({ type: DataTypes.STRING(64) })
    userid!: Guid;
    @Column({ type: DataTypes.STRING(64) })
    applicationid!: Guid;
    @Column({ type: DataTypes.STRING(64) })
    applicantid!: Guid;
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
