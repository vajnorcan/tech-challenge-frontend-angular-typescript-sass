import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightSearch'
})
export class HighlightSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let startIndex, endLength, matchingString;
    if (args && value) {
      startIndex = value.toLowerCase().indexOf(args.toLowerCase());
      if (startIndex !== -1) {
        endLength = args.length;
        matchingString = value.substr(startIndex, endLength);
        return value.replace(matchingString, '<mark>' + matchingString + '</mark>');
      }
    }
    return value;
  }

}
