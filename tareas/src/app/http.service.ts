import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getDatos() {
    return this.http.get(
      'https://back-end-tareas-9e0ed.firebaseio.com/.json')
      .map((response: Response) => response.json());
  }

}
