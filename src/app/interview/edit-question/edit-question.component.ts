import { Reply } from './../../domain/reply';
import { QUESTIONS, REPLIES } from './../../util/mocks';
import { ActivatedRoute, Params } from '@angular/router';
import { QuestionsService } from './../../services/questions.service';
import { Question } from './../../domain/question';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {

  private questionId: number;
  private question: Question;
  private questionReplies: Array<Reply>;

  constructor(private route: ActivatedRoute, private questionService : QuestionsService) { }

  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => this.questionId = params['id']
    );

    this.questionService.getQuestion(this.questionId)
      .subscribe(data => this.question = data,
                error => this.question = QUESTIONS[this.questionId]);

    this.questionService.getQuestionReplies(this.questionId)
        .subscribe(data => this.questionReplies = data,
                error => this.questionReplies = REPLIES)
  }

}
