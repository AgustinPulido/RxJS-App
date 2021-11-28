import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { RepositoryApi } from  '../app/models/repository';
import { CharacterApi, CharacterResult } from  '../app/models/character';
import { map } from "rxjs/operators";

@Injectable()
export class JsonService{

    constructor(
        private http: HttpClient,
    ){}

    getData(url: string): Observable<any>{
        return this.http.get(url);
    }

    getRickAndMortyCharacters(): Observable<CharacterResult[]> {
        return this.http.get<CharacterApi>("https://rickandmortyapi.com/api/character/?page=2")
        .pipe(map((apiResult: any) =>
            apiResult.results
        ));
    }
}