import { Pipe, PipeTransform } from '@angular/core';

const enum ESortOrder {
  asc = 'ASC',
  desc = 'DESC',
}

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform<T extends { prop: 'name' }>(
    array: T[],
    order: ESortOrder = ESortOrder.desc,
    prop: string = '',
  ): T[] {
    console.log(array, order, prop);

    return array.sort((a, b) => a.prop.localeCompare(b.prop));
  }
}
