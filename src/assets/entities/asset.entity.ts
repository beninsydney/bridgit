import { FinancialAsset } from "src/financial-assets/entities/financial-asset.entity";
import { Property } from "src/properties/entities/property.entity";

export class Asset {
    id: number;
    userid: number;
    applicationid: number;
    applicantid: number;
    properties: Property[];
    savings: FinancialAsset[];
    shares: FinancialAsset[];
    superannuation: FinancialAsset[];
}
