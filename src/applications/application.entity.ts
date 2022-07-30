import { Table, Column, Model } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { AdditionalFunds } from "src/AdditionalFunds";
import { Applicant } from "src/applicants/applicant.entity";
import { ImageCoordinate } from "src/ImageCoordinate";
import { Origin } from "src/Origin";
import { Property } from "src/properties/property.entity";
import { LoanPurpose } from "../LoanPurpose";

@Table
export class Application extends Model {
    @Column({ primaryKey: true })
    id: number;
    @Column
    userid: number;
    @Column
    loanPurpose: LoanPurpose;
    @Column
    savingsContribution: number;
    @Column
    giftedSavingsAmount: number;
    @Column
    additionalFundsRequest: number;
    @Column
    additionalFundsReason: AdditionalFunds;
    @Column
    additionalFundsNote: string;
    @Column ({ type: DataTypes.ARRAY(DataTypes.NUMBER) })
    applicants: Applicant[];
    @Column ({ type: DataTypes.ARRAY(DataTypes.NUMBER) })
    buyingProperties: Property[];
    @Column ({ type: DataTypes.ARRAY(DataTypes.NUMBER) })
    sellingProperties: Property[];
    @Column
    heardOfBridgit: Origin;
    @Column
    heardOfBridgitNote: string;
    @Column
    beenBankruptOrInsolvent: boolean;
    @Column
    shareholderOfManagedRecievedLiquidatedCompany: boolean;
    @Column
    hasUnsatisfactoryJudgements: boolean;
    @Column
    hasOtherAdverseFactors: boolean;
    @Column
    over18: boolean;
    @Column
    consentToUseOfPII: boolean;
    @Column
    authorizedToSubmitPII: boolean;
    @Column
    agreeToPrivacyAndIdentityCheck: boolean;
    @Column
    talkToTeam: boolean;
    @Column ({ type: DataTypes.ARRAY(DataTypes.STRING) })
    drawSignature: ImageCoordinate[];
}
