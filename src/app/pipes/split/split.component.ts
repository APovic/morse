import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split',
})
export class SplitComponent implements PipeTransform {
  transform(morse: string, text: string): any {
    return morse.split(' ');
  }
}
