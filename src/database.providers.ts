
import { Sequelize } from 'sequelize-typescript';
import { Address } from './address/address.entity';
import { Applicant } from './applicants/applicant.entity';
import { Application } from './applications/application.entity';
import { Asset } from './assets/asset.entity';
import { CarLoan } from './car-loans/car-loan.entity';
import { CreditCard } from './credit-cards/credit-card.entity';
import { FinancialAsset } from './financial-assets/financial-asset.entity';
import { IncomePayment } from './income-payments/income-payment.entity';
import { Liability } from './liabilities/liability.entity';
import { MonthlyExpense } from './monthly-expenses/monthly-expense.entity';
import { OtherLoan } from './other-loans/other-loan.entity';
import { Property } from './properties/property.entity';
import { PropertyOwner } from './property-owners/property-owner.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize('postgres://user:password@localhost:5432/testdb');
      sequelize.addModels([
        Address, 
        Applicant, 
        Application, 
        Asset, 
        CarLoan, 
        CreditCard,
        FinancialAsset, 
        IncomePayment, 
        Liability, 
        MonthlyExpense,
        OtherLoan, 
        Property, 
        PropertyOwner
      ]);
      await sequelize.sync();
      return sequelize;
    }
  }
];
