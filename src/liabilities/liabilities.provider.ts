import { Liability } from './liability.entity';

export const liabilitiesProviders = [
  {
    provide: 'LIABILITIES_REPOSITORY',
    useValue: Liability
  }
];
