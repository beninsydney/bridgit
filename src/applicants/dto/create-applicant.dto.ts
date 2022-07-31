import { Guid } from 'guid-typescript'
import { Gender } from '../../enums/Gender'
import { Relationship } from '../../enums/Relationship'
import { RelationshipStatus } from '../../enums/RelationshipStatus'

export class CreateApplicantDto {
  relationship?: Relationship | undefined
  relationshipNote?: string
  firstName?: string
  middleName?: string
  lastName?: string
  preferredName?: string
  gender?: Gender | undefined
  genderNote?: string
  dateOfBirth?: Date | undefined
  mobilePhone?: string
  email?: string
  address?: Guid | undefined
  incomeChanging?: boolean | undefined
  incomeChangingNote?: String
  relationshipStatus?: RelationshipStatus | undefined
  dependents?: number
  monthlyExpensesChanging?: boolean | undefined
  monthlyExpensesChangingAmount?: number | undefined
}
