import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchTarget' })
export class SearchCustomPipe implements PipeTransform {
  transform(contratList: any, target?: any): any {
    if (!contratList) return null;
    if (!target) return contratList;
    target = target.toLowerCase();
    return contratList.filter((item) => {
      return JSON.stringify(item).toLowerCase().includes(target);
    });
  }
}
