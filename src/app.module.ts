import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ApplicationsModule } from './applications/applications.module';
import { PropertiesModule } from './properties/properties.module';
import { ApplicantsModule } from './applicants/applicants.module';
import { AddressModule } from './address/address.module';
import { OwnershipsModule } from './ownerships/ownerships.module';
import { IncomeSourcesModule } from './income-sources/income-sources.module';
import { IncomePaymentsModule } from './income-payments/income-payments.module';
import { ExpensesModule } from './expenses/expenses.module';
import { MonthlyExpensesModule } from './monthly-expenses/monthly-expenses.module';
import { AssetsModule } from './assets/assets.module';
import { SavingsAccountsModule } from './savings-accounts/savings-accounts.module';
import { FinancialAssetsModule } from './financial-assets/financial-assets.module';
import { FinancialLiabilitiesModule } from './financial-liabilities/financial-liabilities.module';
import { LiabilitiesModule } from './liabilities/liabilities.module';
import { CreditCardsModule } from './credit-cards/credit-cards.module';
import { CarLoansModule } from './car-loans/car-loans.module';
import { OtherLoansModule } from './other-loans/other-loans.module';

@Module({
  imports: [UsersModule, ApplicationsModule, PropertiesModule, ApplicantsModule, AddressModule, OwnershipsModule, IncomeSourcesModule, IncomePaymentsModule, ExpensesModule, MonthlyExpensesModule, AssetsModule, SavingsAccountsModule, FinancialAssetsModule, FinancialLiabilitiesModule, LiabilitiesModule, CreditCardsModule, CarLoansModule, OtherLoansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
