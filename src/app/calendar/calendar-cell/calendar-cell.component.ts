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
  dayClass = '';


  constructor() {
  }

  ngOnInit() {
    if (this.date.getDay() === 5 || this.date.getDay() === 6) {
      this.dayClass = 'weekend';
    }
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
