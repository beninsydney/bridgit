import { Table, Column, Model } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Guid } from 'guid-typescript';
import { AdditionalFundsReason } from "src/AdditionalFundsReason";
import { ImageCoordinate } from "src/ImageCoordinate";
import { Origin } from "src/Origin";
import { LoanPurpose } from "../LoanPurpose";

@Table
export class Application extends Model {
    @Column({ 
        primaryKey: true, 
        type: DataTypes.STRING(64), 
        defaultValue: () => { 
            return Guid.create().toString() 
        } 
    })
    id: Guid;
    @Column({ type: DataTypes.STRING(64) })
    userid: Guid;
    @Column
    loanPurpose: LoanPurpose;
    @Column
    savingsContribution: number;
    @Column
    giftedSavingsAmount: number;
    @Column
    additionalFundsRequest: number;
    @Column
    additionalFundsReason: AdditionalFundsReason;
    @Column
    additionalFundsNote: string;
    @Column ({ type: DataTypes.ARRAY(DataTypes.STRING(64)) })
    applicants: Guid[];
    @Column ({ type: DataTypes.ARRAY(DataTypes.STRING(64)) })
    buyingProperties: Guid[];
    @Column ({ type: DataTypes.ARRAY(DataTypes.STRING(64)) })
    sellingProperties: Guid[];
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
}
