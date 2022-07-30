import { AdditionalFunds } from "src/AdditionalFunds";
import { Applicant } from "src/applicants/entities/applicant.entity";
import { ImageCoordinate } from "src/ImageCoordinate";
import { Origin } from "src/Origin";
import { Property } from "src/properties/entities/property.entity";
import { LoanPurpose } from "../../LoanPurpose";

export class Application {
    id: number;
    userid: number;
    loanPurpose: Enumerator<LoanPurpose>;
    savingsContribution: number;
    giftedSavingsAmount: number;
    additionalFundsRequest: number;
    additionalFundsReason: Enumerator<AdditionalFunds>;
    additionalFundsNote: string;
    applicants: Applicant[];
    buyingProperties: Property[];
    sellingProperties: Property[];
    heardOfBridgit: Enumerator<Origin>;
    heardOfBridgitNote: string;
    beenBankruptOrInsolvent: boolean;
    shareholderOfManagedRecievedLiquidatedCompany: boolean;
    hasUnsatisfactoryJudgements: boolean;
    hasOtherAdverseFactors: boolean;
    over18: boolean;
    consentToUseOfPII: boolean;
    authorizedToSubmitPII: boolean;
    agreeToPrivacyAndIdentityCheck: boolean;
    talkToTeam: boolean;
    drawSignature: ImageCoordinate[];
}
