import { DataTypes } from 'sequelize';
import { Guid } from 'guid-typescript';
import { Table, Column, Model } from 'sequelize-typescript';
import { FinancialAsset } from "src/financial-assets/financial-asset.entity";
import { Property } from "src/properties/property.entity";

@Table
export class Asset extends Model {
    @Column({ primaryKey: true, type: DataTypes.STRING(64) })
    id: Guid;
    @Column({ type: DataTypes.STRING(64) })
    userid: Guid;
    @Column({ type: DataTypes.STRING(64) })
    applicationid: Guid;
    @Column({ type: DataTypes.STRING(64) })
    applicantid: Guid;
    @Column ({ type: DataTypes.ARRAY(DataTypes.INTEGER) })
    properties: Property[];
    @Column ({ type: DataTypes.ARRAY(DataTypes.INTEGER) })
    savings: FinancialAsset[];
    @Column ({ type: DataTypes.ARRAY(DataTypes.INTEGER) })
    shares: FinancialAsset[];
    @Column ({ type: DataTypes.ARRAY(DataTypes.INTEGER) })
    superannuation: FinancialAsset[];
}
