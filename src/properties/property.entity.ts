import { DataTypes } from 'sequelize'
import { Guid } from 'guid-typescript'
import { Table, Column, Model } from 'sequelize-typescript'
import { DepositMethod } from '../enums/DepositMethods'
import { PropertyType } from '../enums/PropertyType'
import { StampDutyPaymentMethod } from '../enums/StampDutyPaymentMethod'

@Table
export class Property extends Model {
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

  @Column({ type: DataTypes.INTEGER })
  type?: PropertyType

  @Column({ type: DataTypes.BOOLEAN })
  beenListedForSale?: boolean | undefined

  @Column({ type: DataTypes.BOOLEAN })
  isSold?: boolean | undefined

  @Column({ type: DataTypes.BOOLEAN })
  isBuying?: boolean | undefined

  @Column({ type: DataTypes.BOOLEAN })
  isSelling?: boolean | undefined

  @Column({ type: DataTypes.INTEGER })
  estimatedPropertyPrice?: number | undefined

  @Column({ type: DataTypes.BOOLEAN })
  hasMortgage?: boolean | undefined

  @Column({ type: DataTypes.INTEGER })
  outstandingMortgageAmount?: number | undefined

  @Column({ type: DataTypes.STRING(64) })
  address?: Guid

  @Column({ type: DataTypes.INTEGER })
  depositAmount?: number | undefined

  @Column({ type: DataTypes.INTEGER })
  purchasePrice?: number | undefined

  @Column({ type: DataTypes.DATEONLY })
  purchaseDate?: Date | undefined

  @Column({ type: DataTypes.INTEGER })
  depositPayment?: DepositMethod | undefined

  @Column({ type: DataTypes.INTEGER })
  stampDutyPayment?: StampDutyPaymentMethod | undefined

  @Column({ type: DataTypes.INTEGER })
  propertyValue?: number | undefined

  @Column({ type: DataTypes.INTEGER })
  monthlyRentalIncome?: number | undefined

  @Column({ type: DataTypes.INTEGER })
  amountOwing?: number | undefined

  @Column({ type: DataTypes.INTEGER })
  mortgageLimit?: number | undefined
}
