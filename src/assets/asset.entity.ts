import { DataTypes } from 'sequelize';
import { Table, Column, Model } from 'sequelize-typescript';
import { FinancialAsset } from "src/financial-assets/financial-asset.entity";
import { Property } from "src/properties/property.entity";

@Table
export class Asset extends Model {
    @Column({ primaryKey: true })
    id: number;
    @Column
    userid: number;
    @Column
    applicationid: number;
    @Column
    applicantid: number;
    @Column ({ type: DataTypes.ARRAY(DataTypes.NUMBER) })
    properties: Property[];
    @Column ({ type: DataTypes.ARRAY(DataTypes.NUMBER) })
    savings: FinancialAsset[];
    @Column ({ type: DataTypes.ARRAY(DataTypes.NUMBER) })
    shares: FinancialAsset[];
    @Column ({ type: DataTypes.ARRAY(DataTypes.NUMBER) })
    superannuation: FinancialAsset[];
}
