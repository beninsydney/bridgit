import { DataTypes } from 'sequelize'
import { Guid } from 'guid-typescript';
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column({ 
    primaryKey: true, 
    type: DataTypes.STRING(64), 
    defaultValue: () => { 
        return Guid.create().toString() 
    } 
  })
  id: Guid;
}
