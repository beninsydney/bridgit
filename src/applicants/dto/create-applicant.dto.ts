import { Guid } from 'guid-typescript'
import { Gender } from 'src/Gender'
import { Relationship } from 'src/Relationship'
import { RelationshipStatus } from 'src/RelationshipStatus'

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
  incomePayments?: Guid[] | undefined
  incomeChanging?: boolean | undefined
  incomeChangingNote?: String
  relationshipStatus?: RelationshipStatus | undefined
  dependents?: number
  monthlyExpenses?: Guid[] | undefined
  monthlyExpensesChanging?: boolean | undefined
  monthlyExpensesChangingAmount?: number | undefined
}
