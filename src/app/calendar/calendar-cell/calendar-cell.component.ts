import {Component, Input, OnInit} from '@angular/core';

const DAYS = [
  'ראשון',
  'שני',
  'שלישי',
  'רביעי',
  'חמישי',
  'שישי',
  'שבת'
];

@Component({
  selector: 'app-calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.css']
})
export class CalendarCellComponent implements OnInit {

  @Input() date: Date;


  constructor() {
  }

  ngOnInit() {
  }

  dateText() {
    return this.date.getDate().toString() + '.' + (this.date.getMonth() + 1).toString() + '.' + this.date.getFullYear().toString();
  }

  dayText() {
    return DAYS[this.date.getDay()];
  }

  dutyText() {
    return 'מישהו תורן';
  }
}
