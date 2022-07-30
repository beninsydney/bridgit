import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { RequestWithUser } from './RequestWithUser'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ApplicationsModule } from './applications/applications.module'
import { PropertiesModule } from './properties/properties.module'
import { ApplicantsModule } from './applicants/applicants.module'
import { AddressModule } from './address/address.module'
import { IncomePaymentsModule } from './income-payments/income-payments.module'
import { MonthlyExpensesModule } from './monthly-expenses/monthly-expenses.module'
import { AssetsModule } from './assets/assets.module'
import { FinancialAssetsModule } from './financial-assets/financial-assets.module'
import { LiabilitiesModule } from './liabilities/liabilities.module'
import { CreditCardsModule } from './credit-cards/credit-cards.module'
import { CarLoansModule } from './car-loans/car-loans.module'
import { OtherLoansModule } from './other-loans/other-loans.module'
import { PropertyOwnersModule } from './property-owners/property-owners.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    ApplicationsModule,
    PropertiesModule,
    ApplicantsModule,
    AddressModule,
    IncomePaymentsModule,
    MonthlyExpensesModule,
    AssetsModule,
    FinancialAssetsModule,
    LiabilitiesModule,
    CreditCardsModule,
    CarLoansModule,
    OtherLoansModule,
    PropertyOwnersModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule implements NestModule {
  configure (consumer: MiddlewareConsumer): void {
    consumer.apply(RequestWithUser).forRoutes('*')
  }
}
