import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.scss']
})
export class TimeoutComponent implements OnInit {
  isRed = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isRed = !this.isRed;
  }

}
