import { RestMappings } from '../util/router.utils';
import { Http, Response } from '@angular/http';
import { ChatMessage } from '../domain/chat-message';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ChatService {
	
    constructor(private http: Http) { }
    
	getConversation(candidateId: number): Observable<Array<ChatMessage>> {
        return this.http
            .get(RestMappings.candidateChatUrl(candidateId))
            .map((res: Response) => <Array<ChatMessage>> res.json());
    }
}
