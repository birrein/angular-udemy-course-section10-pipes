import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, capitalize: boolean = true): string {
    return capitalize ? value.toUpperCase() : value.toLowerCase();
  }
}
