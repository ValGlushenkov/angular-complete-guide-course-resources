import { Inject, Injectable } from "@angular/core";
import { type InvestmentInput } from "./investment-input.model";
import { type AnnualData } from "./annual-data.model";

@Injectable({providedIn:'root'})
export class InvestmentService{
    private investmentArr: InvestmentInput[] = [];
    private annualData: AnnualData[] = [];

    public addToInvestmentArr(
        input: InvestmentInput
    ){
        this.investmentArr.push(input);
    }

    public calculateInvestmentResults(data: InvestmentInput) {
        // const annualData = [];
        this.annualData = [];
        let investmentValue = data.initialInvestment;
        console.log(investmentValue);
        for (let i = 0; i < data.duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
            investmentValue += interestEarnedInYear + data.annualInvestment;
            const totalInterest =
            investmentValue - data.annualInvestment * year - data.initialInvestment;
            this.annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: data.annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: data.initialInvestment + data.annualInvestment * year,
            });
        }

        
    }

    public getAnnualData(){
        return this.annualData;
    }

}