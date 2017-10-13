import { Candidate } from './candidate';
export class Experience {
    id: number;
    candidate: Candidate;
    title: string;
    company: string;
    periodFrom: Date;
    periodTo: Date;

    constructor(id: number, candidate: Candidate, title: string, 
        company: string,periodFrom: Date, periodTo: Date) {
        this.id = id;
        this.candidate = candidate;
        this.title = title;
        this.company = company;
        this.periodFrom = periodFrom;
        this.periodTo = periodTo;
    }
}