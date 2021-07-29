import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {DataServer} from './interface'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private url = 'https://60f340396d44f30017788915.mockapi.io/api/v1/tasks'
  constructor(private http: HttpClient) { }

  getData():Observable<DataServer[]> {
    return this.http.get<DataServer[]>(this.url)
  }
}
