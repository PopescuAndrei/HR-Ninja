import { Candidate } from './candidate';
export class Interest {

    id: number;
	candidate: Candidate;
	name: string;

    constructor(id: number, candidate: Candidate, name: string) {
        this.id = id;
		this.candidate = candidate;
		this.name = name;
    }
}