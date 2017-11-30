import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  private API_URL = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this._http
      .get<User>(this.API_URL + '/users')
      .catch(this.handleError);
  }

  singUp(user: User): Observable<any> {
    return this._http
      .post(this.API_URL + '/users', user)
      .catch(this.handleError);
  }

  handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }

}
