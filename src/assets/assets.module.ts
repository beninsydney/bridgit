import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AssetsController } from './assets.controller';
import { assetsProviders } from './asset.provider';
import { DatabaseModule } from '../database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AssetsController],
  providers: [AssetsService, ...assetsProviders]
})
export class AssetsModule {}
