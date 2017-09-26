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

  constructor(private questionService: QuestionsService, private dragulaService: DragulaService) {
    this.dragulaService.setOptions('questions-bag', {
      revertOnSpill: true
    });
  }

  ngOnInit() {
    this.questions = this.questionService.getQuestions();

    this.dragulaService
      .drop
      .subscribe(value => {
        this.onDrop(value.slice(1));
      }
    );

    this.dragulaService
      .dropModel
      .subscribe((value:any) => {
        this.reorderOnDrop(value.slice(1));
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

  private reorderOnDrop(value: any) {
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
    var notice = e.children[0].children[0];
    var position = notice.children[0];

    this.addClass(notice, 'notice-moved');
    this.addClass(position, 'position-moved')
  }

  private save() {
    //this.questions.dbSaveAdicaAjaxCall();
  }
}
