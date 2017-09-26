import { DragulaService } from 'ng2-dragula/components/dragula.provider';
import { InterviewComponent } from '../interview.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {


  @Input() question;

  constructor(private interviewComponent: InterviewComponent, private dragulaService: DragulaService) { }

  ngOnInit() {
  }

  private edit(): void {
    console.log("Edit clicked");
  }

  private delete(): void {
    console.log("Delete clicked");
  }
}
