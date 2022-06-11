import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonService } from '../../services/json-service';
import { CharacterResult } from '../models/character';
import { map } from "rxjs/operators";
import { delay } from 'rxjs-compat/operator/delay';

@Component({
  selector: 'app-rick-morty-api',
  templateUrl: './rick-morty-api.component.html',
  styleUrls: ['./rick-morty-api.component.css']
})
export class RickMortyApiComponent implements OnInit {

  isLoading: boolean = true;
  characters$: Observable<CharacterResult[]>;
  characters: any[] = [];

  constructor(
    private json: JsonService,
  ) {
    this.isLoading = false;
    this.characters$ = this.json.getRickAndMortyCharacters();
    this.characters$.pipe(map((character: any) => {
      this.characters.push(character);
    })).subscribe(() => { })
  }

  ngOnInit(): void {
    this.callPromise();
  }

  // Podes probar colocando (!this.characters) en el if para probar un caso de error

  definePromise() {
    // Se declara la promesa
    return new Promise((resolve, reject) => {
      // Se pregunta si existe el array de personajes
      if (this.characters) {
        // Si existe entonces se resuelve la promesa
        return resolve(this.characters);
      }
      return reject({ message: 'Fallo en la promesa' });
    })
  }

  callPromise() {
    // Se llama a la promesa
    this.definePromise().then((x: any) => {
      // Como se ejecuta todo bien, pasa al then y hace el console.log de x que en este caso es lo que retorna la promesa (this.characters)
      console.log(x)
    }).catch((error) => console.log(error));
    // En caso de que la promesa se rechaze, el catch agarra el error y lo imprime por consola
  }

}
