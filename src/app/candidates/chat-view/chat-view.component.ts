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

  constructor(private route: ActivatedRoute, private candidateService: CandidatesService) { }


  ngOnInit() {
    //here we should have the api call
    this.route.params.forEach(
      (params: Params) => this.candidateId = params['id']
    );
  
  this.candidate = new Candidate(this.candidateId, "Andrei","Popescu","andrei.popescu93@gmail.com",'male', "Dude, you're lucky i'm backing you up", 25, 43, 4.8);
  this.candidateConversation = this.candidateService.getConversation();
  }
}
