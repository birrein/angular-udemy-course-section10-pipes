import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.sass'],
})
export class NumbersComponent {
  netSales: number = 9283472.3456;
  percent: number = 0.48456;
}
