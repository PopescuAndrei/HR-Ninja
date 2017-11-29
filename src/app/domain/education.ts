import { Candidate } from './candidate';
export class Education {

    institution: string;
    major?: string;
    periodFrom?: Date;
    periodTo?: Date;
    grade?: number;

    constructor(institution: string, major?: string, periodFrom?: Date, periodTo?: Date, grade?: number) {
        this.institution = institution;
        this.major = major;
        this.periodFrom = periodFrom;
        this.periodTo = periodTo;
        this.grade = grade;
    }
}