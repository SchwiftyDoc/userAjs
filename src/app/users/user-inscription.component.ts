import { Component, OnInit } from '@angular/core';
import { Info } from '../shared/info';
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
  info: Info;
  user: User;

  // Form
  username: string;
  password: string;
  email: string;

  // Alerts
  alert: boolean = false;

  constructor(private _userService: UserService) { }

  ngOnInit() { }

  signUp(): void {
    this.user = new User({
      username: this.username,
      password: this.password,
      email: this.email
    });
    this._userService.signUp(this.user)
      .subscribe(res => {
        this.user = res;
        if (this.user._id) {
          this.info = new Info({
            message: 'everything went well, check your emails for validation.',
            important: 'Subscription: ',
            type: 'success',
          });
          this.alert = true;
        }
      });
  }

  facebookClick(): void {
    this.info = new Info({
      message: 'Subscribing with your facebook account is not yet available .',
      important: 'Feature: ',
      type: 'warning',
    });
    this.alert = true;
  }

  alertFinished(): void {
    this.alert = false;
    this.info = null;
  }
}
