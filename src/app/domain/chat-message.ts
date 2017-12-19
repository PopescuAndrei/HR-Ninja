import { Candidate } from './candidate';

export class ChatMessage {
	from: Candidate;
	message: string;
	fromRobot: boolean;
	time: Date;

    constructor(from: Candidate, fromRobot: boolean, message: string, time: Date) {
		this.from = from;
		this.fromRobot = fromRobot;
		this.message = message;
		this.time = time;
	}
}