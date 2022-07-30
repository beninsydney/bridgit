import { IncomeSource } from "src/IncomeSource";
import { TimePeriod } from "src/TimePeriod";

export class IncomePayment {
    userid: number;
    applicationid: number;
    applicantid: number;
    source: Enumerator<IncomeSource>;
    period: TimePeriod;
    amount: number;
}
