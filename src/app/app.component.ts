import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  value: number = 30;
  min: number = 0;
  enabled: boolean = true;

  change() {
    this.min = 50;
    //this.enabled = false;
  }

  slideStop() {
    console.log('Stopped');
  }
}
