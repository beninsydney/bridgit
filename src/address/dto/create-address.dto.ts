import { Guid } from 'guid-typescript'

export class CreateAddressDto {
  userid: Guid
  applicationid: Guid
  applicantid: Guid
  line1: string
  line2: string
  city: string
  state: string
  postalCode: string
  country: string
}
