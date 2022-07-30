import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { addressesProviders } from './address.provider';

@Module({
  controllers: [AddressController],
  providers: [AddressService, ...addressesProviders]
})
export class AddressModule {}
