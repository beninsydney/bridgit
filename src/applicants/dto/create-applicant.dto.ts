import { Guid } from 'guid-typescript'
import { Gender } from 'src/Gender'
import { Relationship } from 'src/Relationship'
import { RelationshipStatus } from 'src/RelationshipStatus'

export class CreateApplicantDto {
  userid: Guid
  applicationid: Guid
  relationship: Relationship
  relationshipNote: string
  firstName: string
  middleName: string
  lastName: string
  preferredName: string
  gender: Gender
  genderNote: string
  dateOfBirth: Date
  mobilePhone: string
  email: string
  address: Guid
  incomePayments: Guid[]
  incomeChanging: boolean
  incomeChangingNote: String
  relationshipStatus: RelationshipStatus
  dependents: number
  monthlyExpenses: Guid[]
  monthlyExpensesChanging: boolean
  monthlyExpensesChangingAmount: number
}
