import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fouls',
  templateUrl: './fouls.component.html',
  styleUrls: ['./fouls.component.scss']
})
export class FoulsComponent implements OnInit {
  foul = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onFoulClick() {
    this.foul++;
  }

}
