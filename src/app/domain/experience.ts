import { Candidate } from './candidate';
export class Experience {
    id: number;
    title: string;
    company: string;
    periodFrom: Date;
    periodTo: Date;

    constructor(id: number, title: string, company: string,periodFrom: Date, periodTo: Date) {
        this.id = id;
        this.title = title;
        this.company = company;
        this.periodFrom = periodFrom;
        this.periodTo = periodTo;
    }
}