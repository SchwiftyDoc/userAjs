import { Component, OnInit } from '@angular/core';
import { IInfo } from '../shared/info';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user-connexion',
  templateUrl: './user-connexion.component.html',
  styleUrls: ['./user-connexion.component.css'],
})
export class UserConnexionComponent implements OnInit {

  // Models
  user: User;
  info: IInfo;

  // Forms
  username: string;
  password: string;

  // Alerts
  data: boolean = false;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    console.log(this.info);
  }

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
          this.info = {
            message: 'You are now connected on the website',
            important: 'Welcome ' + this.user._id + ': ',
            delay: 4000,
            dismissable: false,
            type: 'success'
          };
          this.data = true;
        }
      });
  }

}
