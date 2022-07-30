import { DataTypes } from 'sequelize'
import { Guid } from 'guid-typescript'
import { Table, Column, Model } from 'sequelize-typescript'

@Table
export class Asset extends Model {
  @Column({
    primaryKey: true,
    type: DataTypes.STRING(64),
    defaultValue: () => {
      return Guid.create().toString()
    }
  })
  id!: Guid

  @Column({ type: DataTypes.STRING(64) })
  userid!: Guid

  @Column({ type: DataTypes.STRING(64) })
  applicationid!: Guid

  @Column({ type: DataTypes.STRING(64) })
  applicantid!: Guid

  @Column({ type: DataTypes.ARRAY(DataTypes.STRING(64)) })
  properties: Guid[]

  @Column({ type: DataTypes.ARRAY(DataTypes.STRING(64)) })
  savings: Guid[]

  @Column({ type: DataTypes.ARRAY(DataTypes.STRING(64)) })
  shares: Guid[]

  @Column({ type: DataTypes.ARRAY(DataTypes.STRING(64)) })
  superannuation: Guid[]
}
