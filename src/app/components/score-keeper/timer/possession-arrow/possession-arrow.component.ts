import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-possession-arrow',
  templateUrl: './possession-arrow.component.html',
  styleUrls: ['./possession-arrow.component.scss']
})
export class PossessionArrowComponent implements OnInit {
 @Input() position = 'left';
  activeColor = 'red';
  leftArrowColor = 'currentColor';
  rightArrowColor = 'currentColor';
  constructor() { }

  ngOnInit(): void {
  }

  onActiveArrowClick() {
    if (this.rightArrowColor !== this.activeColor) {
      this.rightArrowColor = this.activeColor;
      this.leftArrowColor = 'currentColor';
    } else if (this.leftArrowColor !== this.activeColor) {
      this.leftArrowColor = this.activeColor;
      this.rightArrowColor = 'currentColor';
    }
  }

}
