import { FormGroup, FormControl } from '@angular/forms';
import { NotificationService } from './../../services/notification.service';
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
  private editQuestionForm: FormGroup;
  private addReplyForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private notificationService: NotificationService, 
              private questionService : QuestionsService) { }

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

  /**
   * Init the form for adding a reply
   */
  private initAddReplyForm() {
    this.addReplyForm = new FormGroup({
      reply: new FormControl()
    });
  }

  /**
   * Init the form for editing a question
   */
  private initEditQuestionForm() {
    this.editQuestionForm = new FormGroup({
      question: new FormControl()
    })
  }

  /**
   * Add a reply in the list
   */
  addReply() {
    if(this.addReplyForm.value.reply) {
      let newReply = new Reply(null, this.question, this.addReplyForm.value.reply);

      this.questionReplies.push(newReply);
      this.initAddReplyForm();
    } else {
      console.log("not working");
    }
  }

  /**
   * Remove a specific {@code Reply} from the questionReplies List;
   * @param reply
   */
  removeReply(reply: Reply) {
    console.log("remove clicked");
    let replyIndex: number = this.questionReplies.indexOf(reply);
    this.questionReplies.splice(replyIndex, 1);
  }

  private save() {
    this.notificationService.showSuccess("Save successfull");
  }
}
