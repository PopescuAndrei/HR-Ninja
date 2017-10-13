import { Candidate } from './candidate';
export class Education {

    id: number;
    candidate: Candidate;
    institution: string;
    major?: string;
    periodFrom?: Date;
    periodTo?: Date;
    grade?: number;

    constructor(id: number, candidate: Candidate, institution: string, 
        major?: string, periodFrom?: Date, periodTo?: Date, grade?: number) {
        this.id = id;
        this.candidate = candidate;
        this.institution = institution;
        this.major = major;
        this.periodFrom = periodFrom;
        this.periodTo = periodTo;
        this.grade = grade;
    }
}