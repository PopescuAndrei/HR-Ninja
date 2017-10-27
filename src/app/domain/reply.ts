import { Question } from './question';

export class Reply {
	id: number;
	question: Question;
	replyMessage: string;

    constructor(id:number, question: Question , replyMessage: string) {
		this.id = id;
		this.question = question;
		this.replyMessage = replyMessage;
	}
}