import { CarLoan } from './car-loan.entity';

export const carLoanProviders = [
  {
    provide: 'CAR_LOANS_REPOSITORY',
    useValue: CarLoan
  }
];
