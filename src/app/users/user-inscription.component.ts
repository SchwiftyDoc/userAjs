import { Component, OnInit } from '@angular/core';
import { IInfo } from '../shared/info';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user-inscription',
  templateUrl: './user-inscription.component.html',
  styleUrls: ['./user-inscription.component.css'],
  providers: [UserService]
})
export class UserInscriptionComponent implements OnInit {

  // Models
  info: IInfo;
  user: User;

  // Form
  username: string;
  password: string;
  email: string;

  // Alerts
  data: boolean = false;
  facebook: boolean = false;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUsers()
      .subscribe(res => {
        console.log(res);
      });
  }

  signUp(): void {
    this.user = new User({
      username: this.username,
      password: this.password,
      email: this.email
    });
    console.log(this.user);
    this._userService.signUp(this.user)
      .subscribe(res => {
        this.user = res;
        if (this.user._id) {
          this.info = {
            message: 'everything went well, check your emails for validation.',
            important: 'Subscription: ',
            type: 'success',
            delay: 4000,
            dismissable: false
          };
          this.data = true;
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
