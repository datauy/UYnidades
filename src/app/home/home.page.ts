import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  converted: number;
  original: number;
  unit: string = 'usd';
  factor = {
    'usd': 1,
    'antel-arena': 10,
    'tele-comunicaciones': 20,
    'otro' : 100
  }
  constructor() {}

  dataChanged(origin: string) {
    if (origin == 'converted') {
      this.original = this.factor[this.unit]*this.converted;
    }
    else {
      this.converted = this.factor[this.unit]*this.original;
    }
  }

}
