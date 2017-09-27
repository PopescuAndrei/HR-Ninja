import { CONVERSATION, GENERIC_CANDIDATE } from './../../util/mocks';
import { ChatService } from './../../services/chat.service';
import { CandidatesService } from './../../services/candidates.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ChatMessage } from './../../domain/chat-message';
import { Candidate } from './../../domain/candidate';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {
  
  private candidateId: number;
  private candidate: Candidate;
  private candidateConversation: Array<ChatMessage>;

  constructor(private route: ActivatedRoute, 
              private candidateService: CandidatesService,
              private chatService: ChatService) { }


  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => this.candidateId = params['id']
    );
    
    this.candidateService.getCandidate(this.candidateId)
      .subscribe(data => this.candidate = data,
                error => this.candidate = GENERIC_CANDIDATE);

    this.chatService.getConversation(this.candidateId)
      .subscribe(data => this.candidateConversation = data,
                error => this.candidateConversation = CONVERSATION);
  }
}
