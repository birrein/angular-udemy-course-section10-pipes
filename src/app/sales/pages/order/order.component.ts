import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass'],
})
export class OrderComponent {
  inUppercase: boolean = false;
  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.red,
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black,
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.blue,
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red,
    },
    {
      name: 'Linterna Verde',
      fly: true,
      color: Color.green,
    },
  ];

  capitalizeToggle() {
    this.inUppercase = !this.inUppercase;
  }
}
