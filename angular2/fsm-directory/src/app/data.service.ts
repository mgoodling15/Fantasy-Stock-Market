import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Player } from './player';
import { League } from './league';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchPlayers () {
    return this.http.get('https://fsm-angular.firebaseio.com/.json').subscribe(
      (data) => console.log(data)
      //(res) => res.json()
    );
  }

  // private handleError (error: Response | any) {
  //     // In a real world app, you might use a remote logging infrastructure
  //     let errMsg: string;
  //     if (error instanceof Response) {
  //       const body = error.json() || '';
  //       const err = body.error || JSON.stringify(body);
  //       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //     } else {
  //       errMsg = error.message ? error.message : error.toString();
  //     }
  //     console.error(errMsg);
  //     return Observable.throw(errMsg);
  //   }
}
