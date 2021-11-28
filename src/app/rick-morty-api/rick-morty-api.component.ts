import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonService} from '../../services/json-service';
import { CharacterResult } from  '../models/character';

@Component({
  selector: 'app-rick-morty-api',
  templateUrl: './rick-morty-api.component.html',
  styleUrls: ['./rick-morty-api.component.css']
})
export class RickMortyApiComponent implements OnInit {

  isLoading: boolean = true;
  characters$: Observable<CharacterResult[]>;

  constructor(
    private json: JsonService,
  ) {
    this.isLoading = false;
    this.characters$ = this.json.getRickAndMortyCharacters();
  }

  ngOnInit(): void {
  }

}
