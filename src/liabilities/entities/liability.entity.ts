import { CarLoan } from "src/car-loans/entities/car-loan.entity";
import { CreditCard } from "src/credit-cards/entities/credit-card.entity";
import { OtherLoan } from "src/other-loans/entities/other-loan.entity";

export class Liability {
    id: number;
    userid: number;
    applicationid: number;
    applicantid: number;
    creditCards: CreditCard[];
    carLoans: CarLoan[];
    otherLoans: OtherLoan[];
}
