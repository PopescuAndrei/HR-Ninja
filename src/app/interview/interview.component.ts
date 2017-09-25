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
  private msg: string;

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
        this.msg = `Dragging the ${ value[1].innerText }!`;
      });

    this.dragulaService
      .dropModel
      .subscribe((value:any) => {
        this.reorderOnDrop(value.slice(1));
      });
  }

  private reorderOnDrop(value: any) {
    let i = 1;
    for (let question of this.questions) {
      question.position = i;
      i ++;
    }
  }

  private save() {
    //this.questions.dbSaveAdicaAjaxCall();
  }
}
