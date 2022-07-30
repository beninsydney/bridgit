import { Address } from './address.entity'

export const addressesProviders = [
  {
    provide: 'ADDRESS_REPOSITORY',
    useValue: Address
  }
]
