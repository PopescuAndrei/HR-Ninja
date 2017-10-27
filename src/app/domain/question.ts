import { Candidate } from './candidate';

export class Question {
	id: number;
	position: number;
	query: string;

    constructor(id:number, position: number, query: string) {
		this.id = id;
		this.position = position;
		this.query = query;
	}
}