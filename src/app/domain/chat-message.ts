import { Candidate } from './candidate';

export class ChatMessage {
	id: number;
	from: Candidate;
	message: string;

    constructor(id:number, user: Candidate, message: string) {
		this.id = id;
		this.from = user;
		this.message = message;
	}
}