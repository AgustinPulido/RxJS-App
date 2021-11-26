import { Component } from '@angular/core';
import { of } from 'rxjs';
import { first, last, map, filter } from "rxjs/operators";
import { FormsModule } from '@angular/forms';

// Ejemplo de operador map
// of(1, 2, 3, 4, 5)
// .pipe(map(v => v = 3))
// .subscribe(x => console.log(`value : ${x}`))

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'rxjs';

  constructor (){}

  ngOnInit(){
  }

}
