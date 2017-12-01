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
  info: Info;

  // Alerts
  alert: boolean = false;

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
        if (this.user._id) {
          this.info = new Info({
            message: 'You are now connected on the website',
            important: 'Welcome ' + this.user._id + ': ',
            dismissable: false,
            type: 'success'
          });
          this.alert = true;
        }
      });
  }

  alertFinish(event) {
    this.info = null;
    this.alert = false;
  }

}
