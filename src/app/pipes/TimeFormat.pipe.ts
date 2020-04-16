import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TimeFormatPipe'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // 4.1
    const hours = Math.floor((value / 60) / 60);
    const minutes = Math.floor(value / 60) % 60;
    const seconds = value % 60;
    return `${this.padding(hours)}${hours}:${this.padding(minutes)}${minutes}:${this.padding(seconds)}${seconds}`;
    // END 4.1
  }

  private padding(time) {
    return time < 10 ? '0' : '';
  }

}
