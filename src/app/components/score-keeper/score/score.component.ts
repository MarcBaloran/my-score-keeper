import { Component, OnInit, Input, Output, AfterViewInit, ViewChild, ElementRef, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  @Input() teamName: string;
  isHidden = false;
  totalScore =  0;


  ngOnInit() {
  }

  constructor() { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {
  }

  onToggle() {
    this.isHidden = !this.isHidden;
  }

}
