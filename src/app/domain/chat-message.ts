import { CHAT_BOT } from '../util/mocks';
import { Candidate } from './candidate';

export class ChatMessage {
	from: Candidate;
	message: string;
	fromRobot: boolean;
	time: Date;

    constructor(from: Candidate, fromRobot: boolean, message: string, time: Date) {
		this.from = from;
		this.fromRobot = fromRobot;
		if (this.fromRobot === true) {
			this.from = CHAT_BOT;
			console.log(this.from);
		}
		this.message = message;
		this.time = time;
	}
}