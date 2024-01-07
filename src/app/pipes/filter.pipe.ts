import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: any[], searchText: any): any[] {
    if(!searchText) {
      return data;
    }
    return data.filter((items) => this.matchValue(items, searchText));
  }

  matchValue(data, value) {
    return Object.keys(data).map((key) => {
      return new RegExp(value, 'gi').test(data[key]);
    }).some(result => result);
  }

}