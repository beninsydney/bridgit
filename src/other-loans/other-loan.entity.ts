import { DataTypes } from 'sequelize'
import { Guid } from 'guid-typescript';
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class OtherLoan extends Model {
    @Column({ 
        primaryKey: true, 
        type: DataTypes.STRING(64), 
        defaultValue: () => { 
            return Guid.create().toString() 
        } 
    })
    id: Guid;
    @Column({ type: DataTypes.STRING(64) })
    userid: Guid;
    @Column({ type: DataTypes.STRING(64) })
    applicationid: Guid;
    @Column({ type: DataTypes.STRING(64) })
    applicantid: Guid;
    @Column
    description: String;
    @Column
    liabilityLimit: number;
    @Column
    amountOwing: number;
    @Column
    monthlyRepayment: number;
}
