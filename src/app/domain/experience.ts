export class Experience {
    title: string;
    company: string;
    description: string;
    period: string;

    constructor(title: string, company: string, description: string, period: string) {
        this.title = title;
        this.company = company;
        this.description = description;
        this.period = period;
    }
}