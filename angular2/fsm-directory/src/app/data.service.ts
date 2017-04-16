
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getPlayers(): Observable<any> {
    return this.http.get('/api/players')
                    .map(this.extractPlayerData)
                    .catch(this.handleError);
  }

  private extractPlayerData(res: Response) {
    let body;

   // check if empty, before call json
   if (res.text()) {
       body = res.json();
   }
   return body || {};
  }

  private addPlayer(res: Response) {

  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

}
