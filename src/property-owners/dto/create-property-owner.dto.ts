import { Guid } from 'guid-typescript'

export class CreatePropertyOwnerDto {
  propertyid?: Guid | undefined
  percent?: number | undefined
}
