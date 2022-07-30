import { PropertyOwner } from './property-owner.entity'

export const propertyOwnersProviders = [
  {
    provide: 'PROPERTY_OWNERS_REPOSITORY',
    useValue: PropertyOwner
  }
]
