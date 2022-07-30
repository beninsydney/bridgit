import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class PropertyOwner extends Model {
    @Column({ primaryKey: true })
    id: number;
    @Column
    applicantid: number;
    @Column
    propertyid: number;
    @Column
    percent: number;
}
