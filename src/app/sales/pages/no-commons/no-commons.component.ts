import { Component, OnInit } from '@angular/core';

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
}
