import { Module } from '@nestjs/common';
import { PropertyOwnersService } from './property-owners.service';
import { PropertyOwnersController } from './property-owners.controller';
import { propertyOwnersProviders } from './property-owners.provider';
import { DatabaseModule } from '../database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PropertyOwnersController],
  providers: [PropertyOwnersService, ...propertyOwnersProviders]
})
export class PropertyOwnersModule {}
