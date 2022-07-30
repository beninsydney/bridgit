import { OtherLoan } from './other-loan.entity';

export const otherLoansProviders = [
  {
    provide: 'OTHER_LOANS_REPOSITORY',
    useValue: OtherLoan
  }
];
