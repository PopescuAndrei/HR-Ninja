export class Experience {
    title: string;
    company: string;
    description: string;
    periodFrom: Date;
    periodTo: Date;

    constructor(title: string, company: string, description: string, periodFrom: Date, periodTo: Date) {
        this.title = title;
        this.company = company;
        this.description = description;
        this.periodFrom = periodFrom;
        this.periodTo = periodTo;
    }
}