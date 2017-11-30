import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IInfo } from '../shared/info';
import { User } from './user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  private API_URL = 'http://localhost:3000';

  constructor(private _http: Http) { }

  getUsers(): Observable<User[]> {
    return this._http
      .get(this.API_URL + '/users')
      .map(res => {
        const users: User[] = res.json();
        return users.map((user) => new User(user));
      })
      .catch(this.handleError);
  }

  signIn(user: User): Observable<User> {
    return this._http
      .post(this.API_URL + '/signin', user)
      .map(res => new User(res.json()))
      .catch(this.handleError);
  }

  signUp(user: User): Observable<User> {
    return this._http
      .post(this.API_URL + '/users', user)
      .map(response => {
        return new User(response.json());
      })
      .catch(this.handleError);
  }

  handleError(err: Response | any) {
    return Observable.throw(err.message);
  }

}
