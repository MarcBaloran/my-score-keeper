import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {
  @Input() teamName: string;


  btnScore = 0;
  score =  0;

  addScore() {
    this.score = this.score + this.btnScore;
  }


  constructor() { }

}
