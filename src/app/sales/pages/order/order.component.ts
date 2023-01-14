import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit {
  inUppercase: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  capitalizeToggle() {
    this.inUppercase = !this.inUppercase;
  }
}
