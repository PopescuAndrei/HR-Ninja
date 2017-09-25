import { Candidate } from './candidate';

export class Question {
	id: number;
	position: number;
	question: string;
	answers: Array<string>;

    constructor(id:number, position: number, question: string, answers: Array<string>) {
		this.id = id;
		this.position = position;
		this.question = question;
		this.answers = answers;
	}
}