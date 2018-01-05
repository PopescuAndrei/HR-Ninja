import { REPLY_NOT_REMOVED, REPLY_REMOVED, REPLY_INVALID, QUESTION_EDITED, REPLY_ADDED, REPLY_NOT_ADDED, QUESTION_NOT_EDITED, QUESTION_INVALID } from './../../util/messages';
import { FormGroup, FormControl } from '@angular/forms';
import { NotificationService } from './../../services/notification.service';
import { Reply } from './../../domain/reply';
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

  private saveDisabled: boolean;

  constructor(private route: ActivatedRoute,
              private notificationService: NotificationService, 
              private questionService : QuestionsService) { }

  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => this.questionId = params['id']
    );

    this.initEditQuestionForm();
    this.initAddReplyForm();

    this.questionService.findProgress()
      .subscribe(data => {
        this.saveDisabled = data;
        console.log(this.saveDisabled);
      });
      
    this.questionService.getQuestion(this.questionId)
      .subscribe(
        data => {
          this.question = data;
          this.editQuestionForm.value.question = this.question.query;
        }
      );

    this.questionService.getQuestionReplies(this.questionId)
        .subscribe(data => this.questionReplies = data)

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

  private updateQuestion() {
    if(this.editQuestionForm.value.question) {
      this.question.query = this.editQuestionForm.value.question;

      this.questionService.updateQuestion(this.question)
        .subscribe(
          data => {
            this.notificationService.showSuccess(QUESTION_EDITED);
          }, error => {
            this.notificationService.showError(QUESTION_NOT_EDITED);
          }
        );
    } else {
      this.notificationService.showError(QUESTION_INVALID);
    }
  }

  /**
   * Add a reply in the list
   */
  addReply() {
    if(this.addReplyForm.value.reply) {
      let newReply = new Reply(null, this.question, this.addReplyForm.value.reply);

      this.questionService.addReplyForQuestion(this.questionId, newReply)
        .subscribe(
          data => {
            this.questionReplies.push(data);
            this.notificationService.showSuccess(REPLY_ADDED);
            this.initAddReplyForm();
          }, error => {
            this.notificationService.showError(REPLY_NOT_ADDED);
          }
        );
    } else {
      this.notificationService.showError(REPLY_INVALID);
    }
  }

  /**
   * Remove a specific {@code Reply} from the questionReplies List;
   * @param reply
   */
  removeReply(reply: Reply) {
    let replyIndex: number = this.questionReplies.indexOf(reply);

    if(reply.id > 0) {
      this.questionService.removeReply(this.questionId, reply.id)
        .subscribe(
          data => {
            this.questionReplies.splice(replyIndex, 1);
            this.notificationService.showSuccess(REPLY_REMOVED);
          }, error => {
            this.notificationService.showError(REPLY_NOT_REMOVED);
          }
        );
    } else {
      this.questionReplies.splice(replyIndex, 1);
    }
  }
}
