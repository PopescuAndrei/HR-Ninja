import { Candidate } from './candidate';
export class Experience {

    title: string;
    company: string;
    periodFrom: Date;
    periodTo: Date;

    constructor(title: string, company: string,periodFrom: Date, periodTo: Date) {
        this.title = title;
        this.company = company;
        this.periodFrom = periodFrom;
        this.periodTo = periodTo;
    }
}