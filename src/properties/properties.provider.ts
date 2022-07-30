import { Property } from './property.entity';

export const propertiesProviders = [
  {
    provide: 'PROPERTIES_REPOSITORY',
    useValue: Property
  }
];
