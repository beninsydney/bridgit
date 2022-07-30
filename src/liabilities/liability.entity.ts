import { DataTypes } from 'sequelize'
import { Guid } from 'guid-typescript'
import { Table, Column, Model } from 'sequelize-typescript'

@Table
export class Liability extends Model {
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
  creditCards: Guid[]

  @Column({ type: DataTypes.ARRAY(DataTypes.STRING(64)) })
  carLoans: Guid[]

  @Column({ type: DataTypes.ARRAY(DataTypes.STRING(64)) })
  otherLoans: Guid[]
}
