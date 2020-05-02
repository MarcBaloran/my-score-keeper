import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nameOne = '';
  nameTwo = '';
  title = 'my-score-keeper';

  getDisplay() {
    return 'inline';
  }

  getWidth(){
    return '45%';
  }
}
