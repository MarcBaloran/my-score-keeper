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


  constructor() { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {
  }

}
