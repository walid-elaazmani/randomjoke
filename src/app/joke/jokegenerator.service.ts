import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class JokegeneratorService {

  url: string  = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious&type=single'

  constructor(private http: HttpClient) { }

  getJoke():Observable<any>{
    return this.http.get(this.url, {headers: { Accept: 'application/json'}} )
  }
}
