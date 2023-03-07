import { Component } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
})
export class TimeDisplayComponent {
  test: number = 1;

  constructor() {
    setInterval((): void => {
      this.test = 2;
    }, 1000);
  }
}
