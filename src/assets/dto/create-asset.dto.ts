import { Guid } from 'guid-typescript'

export class CreateAssetDto {
  properties?: Guid[] | undefined
  savings?: Guid[] | undefined
  shares?: Guid[] | undefined
  superannuation?: Guid[] | undefined
}
