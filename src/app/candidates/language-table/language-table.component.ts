import { Language } from './../../domain/language';
import { Component, Input, OnInit } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: Array<Language>;
}

@Component({
  selector: 'language-table',
  templateUrl: './language-table.component.html',
  styleUrls: ['./language-table.component.css']
})
export class LanguageTableComponent implements OnInit {
  
  @Input()
  public candidateLanguages;
  
  public languages: TableData;
  
  constructor() { }

  ngOnInit() {
    this.languages = {
      headerRow: [ 'Name', 'Writing', 'Understanding', 'Speaking'],
      dataRows: this.candidateLanguages
    };
  }

}
