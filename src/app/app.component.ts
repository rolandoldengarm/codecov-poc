import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codecov';

  public newMethod() {
    const x = 1 / 2;
    return x;
  }
}
