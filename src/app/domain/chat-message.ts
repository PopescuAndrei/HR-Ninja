import { Candidate } from './candidate';

export class ChatMessage {
	id: number;
	from: Candidate;
	message: string;
	time: Date;

    constructor(id:number, from: Candidate, message: string, time: Date) {
		this.id = id;
		this.from = from;
		this.message = message;
		this.time = time;
	}
}