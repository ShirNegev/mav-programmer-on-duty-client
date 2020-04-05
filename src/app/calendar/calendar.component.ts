import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  days: Date[] = [];
  minDate: FormControl;
  maxDate: FormControl;

  constructor() {
  }

  ngOnInit() {
    const currentDate = new Date();
    this.minDate = new FormControl(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()));
    this.maxDate = new FormControl(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()));
  }

  onClick() {
    this.days = this.calcRangeOfDates(this.minDate.value, this.maxDate.value);
  }

  calcRangeOfDates(start: Date, end: Date) {
    const rangeOfDates = [];

    if (start.getDay() !== 0) {
      for (let index = 0; index < start.getDay(); index++) {
        rangeOfDates.push(null);
      }
    }

    for (const date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
      rangeOfDates.push(new Date(date));
    }

    return rangeOfDates;
  }
}

