import { Pipe, PipeTransform } from '@angular/core';
import { ESortOrder } from '../../enums/sort.enum';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform<T extends { [key: string]: keyof T }>(
    array: T[],
    options: {
      prop: string;
      order: ESortOrder;
    },
  ): T[] {
    const { prop, order = ESortOrder.asc } = options;

    switch (order) {
      case ESortOrder.asc:
        return array.sort((a, b) => {
          const prop1 = a[prop].toString();
          const prop2 = b[prop].toString();

          return prop1.localeCompare(prop2);
        });

      case ESortOrder.desc:
        return array.sort((a, b) => {
          const prop1 = a[prop].toString();
          const prop2 = b[prop].toString();

          return prop2.localeCompare(prop1);
        });

      default:
        return array;
    }
  }
}
