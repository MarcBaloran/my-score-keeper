import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {
  @HostBinding('class.d-none') isHidden = false;

  constructor() { }

  @HostListener('keydown.enter') toggleHidden() {
    this.isHidden = !this.isHidden;
  }

}
