import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-possession-arrow',
  templateUrl: './possession-arrow.component.html',
  styleUrls: ['./possession-arrow.component.scss']
})
export class PossessionArrowComponent implements OnInit {
 @Input() position = 'left';

  constructor() { }

  ngOnInit(): void {
  }

}
