import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'order',
})
export class OrderPipe implements PipeTransform {
  transform(heroes: Heroe[]): Heroe[] {
    return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
}
