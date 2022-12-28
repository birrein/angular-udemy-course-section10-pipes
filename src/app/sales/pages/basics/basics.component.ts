import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.sass']
})
export class BasicsComponent implements OnInit {

  nameLower: string = 'manuel';
  nameUpper: string = 'MANUEL';
  nameFull: string = 'mAnUeL MaRíN';

  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
