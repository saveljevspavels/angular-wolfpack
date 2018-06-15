import { Pipe, PipeTransform } from '@angular/core';

import constants from '../../constants';

@Pipe({name: 'currency'})

export class CurrencyPipe implements PipeTransform {
  transform(value: string): string {
    return constants.CURRENCY[value] ? constants.CURRENCY[value] : value;
  }
}