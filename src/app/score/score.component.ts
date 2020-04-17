import { Component, OnInit, Input, Output, AfterViewInit, ViewChild, ElementRef, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() teamName: string;
  btnScore = 0;
  totalScore =  0;
  tempScore = 0;

  ngOnInit() {
  }

  addThreePoints() {
    this.totalScore = this.totalScore + 3;
  }

  addTwoPoints() {
    this.totalScore = this.totalScore + 2;
  }

  addFreeThrowPoints() {
    this.totalScore = this.totalScore + 1;
  }

  constructor() { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {

  }

}
