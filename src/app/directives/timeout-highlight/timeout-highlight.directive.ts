import { Directive, OnInit, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appTimeoutHighlight]'
})
export class TimeoutHighlightDirective implements OnInit {

  defaultColor = 'grey';
  highlightColor = 'red';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('click') onClickRed(eventData: Event) {
    /* Using Renderer2 class */
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    /* Using HostBinding class */
    if (this.backgroundColor === this.defaultColor) {
      this.backgroundColor = this.highlightColor;
    }

  }

}
