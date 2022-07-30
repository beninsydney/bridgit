import { PartialType } from '@nestjs/mapped-types';
import { CreateFinancialAssetDto } from './create-financial-asset.dto';

export class UpdateFinancialAssetDto extends PartialType(CreateFinancialAssetDto) {}
