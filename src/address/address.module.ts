import { Module } from '@nestjs/common'
import { AddressService } from './address.service'
import { AddressController } from './address.controller'
import { addressesProviders } from './address.provider'
import { DatabaseModule } from '../database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [AddressController],
  providers: [AddressService, ...addressesProviders]
})
export class AddressModule {}
