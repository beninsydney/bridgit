import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Address extends Model {
    @Column({ primaryKey: true })
    id: number;
    @Column
    userid: number;
    @Column
    applicationid: number;
    @Column
    line1: string;
    @Column
    line2: string;
    @Column
    city: string;
    @Column
    state: string;
    @Column
    postalCode: string;
    @Column
    country: string;
}
