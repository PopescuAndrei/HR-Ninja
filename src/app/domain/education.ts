export class Education {
    institution: string;
    major?: string;
    fromDate?: Date;
    toDate?: Date;
    grade?: number;

    constructor(institution: string, major?: string, fromDate?: Date, toDate?: Date, grade?: number) {
        this.institution = institution;
        this.major = major;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.grade = grade;
    }
}