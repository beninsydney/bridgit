import { DataTypes } from 'sequelize'
import { Guid } from 'guid-typescript'
import { Table, Column, Model } from 'sequelize-typescript'

@Table
export class Address extends Model {
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
  applicantid?: Guid

  @Column
  line1: string

  @Column
  line2?: string

  @Column
  city: string

  @Column
  state: string

  @Column
  postalCode: string

  @Column
  country: string
}
