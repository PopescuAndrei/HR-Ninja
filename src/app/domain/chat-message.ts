import { Candidate } from './candidate';

export class ChatMessage {
	from: Candidate;
	message: string;
	time: Date;

    constructor(from: Candidate, message: string, time: Date) {
		this.from = from;
		this.message = message;
		this.time = time;
	}
}