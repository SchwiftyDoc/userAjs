import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from './user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  private API_URL = 'http://5.196.89.92:3000';

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this._http
      .get<IUser>(this.API_URL + '/users')
      .catch(this.handleError);
  }

  addUser(user: IUser) { }

  handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }

}
