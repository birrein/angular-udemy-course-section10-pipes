import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styleUrls: ['./no-commons.component.sass'],
})
export class NoCommonsComponent {
  // i18nSelect
  name: string = 'Karla';
  gender: string = 'female';

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  // i18nPlural
  clients: string[] = ['María', 'Pedro', 'Juan', 'Luis', 'Ana'];
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    other: 'tenemos # clientes esperando.',
  };

  changeClient() {
    this.name = 'Juan';
    this.gender = 'male';
  }

  removeClient() {
    this.clients.pop();
  }

  // KeyValue Pipe
  person = {
    name: 'Manuel',
    age: 38,
    address: 'Villa Alemana, Chile',
  };

  // Json Pipe
  heroes = [
    {
      name: 'Superman',
      fly: true,
    },
    {
      name: 'Robin',
      fly: false,
    },
    {
      name: 'Aquaman',
      fly: false,
    },
  ];

  // Async Pipe
  myObservable = interval(1000);

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data from promise');
    }, 3500);
  });
}
