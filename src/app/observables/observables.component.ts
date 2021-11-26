import { Component, OnInit, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})

export class ObservablesComponent implements OnInit {

  count: any;
  contador: number = 0;
  flag: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  startClickCount(){
    this.flag = true;
    this.count = fromEvent(document, 'click')
    .pipe(scan(count => count + 1, 0))
      .subscribe((count: any) => {
      // console.log(`Clicked ${count} times`);
      this.contador = count;
    });
    setTimeout(() => {
      this.count.unsubscribe();
      console.log('Pasaron 10 segundos, se acabo la suscripcion');
    }, 10000);
  }

}
