import { Address } from "src/address/entities/address.entity";
import { Ownership } from "src/ownerships/entities/ownership.entity";
import { DepositMethod } from "../../DepositMethods";
import { PropertyType } from "../../PropertyType";
import { StampDutyPaymentMethod } from "../../StampDutyPaymentMethod";

export class Property {
    id: number;
    userid: number;
    applicationid: number;
    type: Enumerator<PropertyType>;
    beenListedForSale: boolean;
    isSold: boolean;
    estimatedPropertyPrice: number;
    hasMortgage: boolean;
    outstandingMortgageAmount: number;
    address: Address;
    depositAmount: number;
    purchasePrice: number;
    purchaseDate: Date;
    depositPayment: Enumerator<DepositMethod>;
    stampDutyPayment: Enumerator<StampDutyPaymentMethod>;
    applicantOwnership: Ownership[];
    propertyValue: number;
    monthlyRentalIncome: number;
    amountOwing: number;
    mortgageLimit: number;
}
