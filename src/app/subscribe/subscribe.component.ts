import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Estructura de un observable
  observable = new Observable (observer => {
    let suma = 1 + 5;
    observer.next(suma);
    observer.next(suma + 1);
    observer.complete();
  })

  // Subscribe al observable:
  // execution = this.observable.subscribe((x: any) => console.log(x));

  start(){
    // Ejemplo de obvervable que pushea valores 1, 2 y 3 en orden secuancial cuando se suscribe y dps el valor 4 despues de un segundo despues de la subscripcion
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
    console.log('Justo antes de suscribirse');
    observable.subscribe({
      next(x) { console.log('recibi el valor: ' + x); },
      error(err) { console.error('algo mal ocurrio: ' + err); },
      complete() { console.log('done'); }
    });
    console.log('Justo despues de suscribirse');
  }

}
