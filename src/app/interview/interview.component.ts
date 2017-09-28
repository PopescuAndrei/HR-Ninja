import { QUESTIONS } from './../util/mocks';
import { NotificationService } from './../services/notification.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Position } from './../domain/position';
import { DragulaService } from 'ng2-dragula/components/dragula.provider';
import { QuestionsService } from './../services/questions.service';
import { Question } from './../domain/question';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  private questions: Array<Question>;
  private addQuestionForm: FormGroup;

  constructor(private questionService: QuestionsService, 
              private dragulaService: DragulaService,
              private notificationService: NotificationService) {

    this.dragulaService.setOptions('questions-bag', {
      revertOnSpill: true
    });
  }

  ngOnInit() {
    this.questionService.getQuestions()
      .subscribe(data => this.questions = data,
                error => this.questions = QUESTIONS);

    this.dragulaService
      .drop
      .subscribe(value => {
        this.onDrop(value.slice(1));
      }
    );

    this.dragulaService
      .dropModel
      .subscribe((value:any) => {
        this.updateOrder();
      }
    );
    this.initAddQuestionForm();
  }

  private initAddQuestionForm() {
    this.addQuestionForm = new FormGroup({
      question: new FormControl()
    });
  }

  ngOnDestroy() {
    this.dragulaService.destroy('questions-bag');
  }

  addQuestion() {
    if(this.addQuestionForm.value.question) {
      let newQuestion = new Question(null, this.questions.length + 1, this.addQuestionForm.value.question, new Array<string>());
      
      this.questions.push(newQuestion);
      this.initAddQuestionForm();
    } else {
      console.log("not working");
    }
  }

  removeQuestion(question: Question) {
    console.log("remove clicked");
    const index: number = this.questions.indexOf(question);
    if (index !== 1) {
      this.questions.splice(index, 1);
    }

    this.updateOrder();
  }

  private updateOrder() {
    let i = 1;
    for (let question of this.questions) {
      question.position = i;
      i++;
    }
  }

  private hasClass(el: any, name: string): any {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el:any, name:string):void {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el:any, name:string):void {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

  private onDrop(args:any):void {
    let [e] = args;
    var notice = e.children[0];
    var position = notice.children[0];

    this.addClass(notice, 'notice-moved');
    this.addClass(position, 'position-moved')
  }

  private saveAll() {
    this.notificationService.showSuccess("Save succesful");
    //this.questions.dbSaveAdicaAjaxCall();
  }
}
