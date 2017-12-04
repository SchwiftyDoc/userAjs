import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Info } from '../shared/info';
import { User } from './user';

@Component({
  selector: 'app-user-connexion',
  templateUrl: './user-connexion.component.html',
  styleUrls: ['./user-connexion.component.css'],
})
export class UserConnexionComponent implements OnInit {

  // Models
  user: User;
  info: Info = null;

  // Forms
  username: string;
  password: string;

  constructor(private _userService: UserService) { }

  ngOnInit() { }

  connexion(): void {
    this.user = new User({
      username: this.username,
      password: this.password,
      status: null
    });
    this._userService.signIn(this.user)
      .subscribe(res => {
        this.user = res;
        console.log('debug');
        if (res._id) {
          this.info = new Info({
            important: 'Connection:',
            message: 'Welcome back ' + res.username + '.',
            dismissable: false,
            type: 'info'
          });
        } else {
          this.info = new Info({
            important: 'Connection:',
            message: 'User and password don\'t match.',
          });
        }
      });
  }

  alertFinish(event) {
    this.info = null;
  }

}
