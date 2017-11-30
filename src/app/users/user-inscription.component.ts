import { Component, OnInit } from '@angular/core';
import { IInfo } from '../shared/info';
import {UserService} from './user.service';
import {User} from './user';

@Component({
  selector: 'app-user-inscription',
  templateUrl: './user-inscription.component.html',
  styleUrls: ['./user-inscription.component.css']
})
export class UserInscriptionComponent implements OnInit {

  info: IInfo;
  user: User;
  username: string;
  password: string;
  email: string;
  data: boolean = false;
  facebook: boolean = false;

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  singUp(): void {
    this.user = new User({
      username: this.username,
      password: this.password,
      email: this.email
    });
    this._userService.singUp(this.user)
      .subscribe(res => {
        if (res.__v === 0) {
          this.user = res.user[0];
        } else {

        }
      });
  }

  facebookClick(): void {
    this.info = {
      message: 'Subscribing with your facebook account is not yet available .',
      important: 'Feature: ',
      type: 'warning',
      delay: 4000,
      dismissable: true
    };
    this.facebook = !this.facebook;
  }

}
