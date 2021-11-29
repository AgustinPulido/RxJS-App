import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  indicators: any = [
    {
      name: 'Ingresos por ventas',
      penultimate: 500,
      ultimate: 1000,
    },
    {
      name: 'Contratos firmados',
      penultimate: 5,
      ultimate: 10,
    },
    {
      name: 'Crecimiento del capital',
      penultimate: 1000,
      ultimate: 5000,
    },
    {
      name: 'Crecimiento en hectáreas',
      penultimate: 50,
      ultimate: 100,
    },
    {
      name: 'Empleados',
      penultimate: 20,
      ultimate: 25,
    },
    {
      name: 'Egresos',
      penultimate: 100,
      ultimate: 150,
    }
  ];

  values: Array<any> = [0, 0, 0, 0, 0, 0];

  constructor() { }

  ngOnInit(): void {
  }

  update(indice: number, value: number){
    this.indicators[indice].penultimate = this.indicators[indice].ultimate;
    this.indicators[indice].ultimate = value;
    this.values[indice] = 0
  }

}
