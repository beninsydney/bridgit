import { Module } from '@nestjs/common';
import { OtherLoansService } from './other-loans.service';
import { OtherLoansController } from './other-loans.controller';

@Module({
  controllers: [OtherLoansController],
  providers: [OtherLoansService]
})
export class OtherLoansModule {}
