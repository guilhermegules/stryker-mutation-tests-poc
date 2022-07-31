import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public counter = 0;

  public increase() {
    if (this.counter > 10) {
      this.counter = 0;
      return;
    }

    this.counter++;
  }

  public decrease() {
    this.counter--;
  }
}
