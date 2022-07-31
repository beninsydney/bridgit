import { Table, Column, Model } from 'sequelize-typescript'
import { Guid } from 'guid-typescript'
import { DataTypes } from 'sequelize'
import { Gender } from 'src/enums/Gender'
import { Relationship } from 'src/enums/Relationship'
import { RelationshipStatus } from 'src/enums/RelationshipStatus'

@Table
export class Applicant extends Model {
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

  @Column({ type: DataTypes.INTEGER })
  relationship?: Relationship

  @Column
  relationshipNote?: string

  @Column
  firstName?: string

  @Column
  middleName?: string

  @Column
  lastName?: string

  @Column
  preferredName?: string

  @Column({ type: DataTypes.INTEGER })
  gender?: Gender

  @Column
  genderNote?: string

  @Column({ type: DataTypes.DATEONLY })
  dateOfBirth?: Date

  @Column
  mobilePhone?: string

  @Column
  email?: string

  @Column({ type: DataTypes.STRING(64) })
  address?: Guid

  @Column
  incomeChanging?: boolean

  @Column
  incomeChangingNote?: String

  @Column
  relationshipStatus?: RelationshipStatus

  @Column
  dependents?: number

  @Column
  monthlyExpensesChanging?: boolean

  @Column
  monthlyExpensesChangingAmount?: number
}
