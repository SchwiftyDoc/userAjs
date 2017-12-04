import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Info } from '../shared/info';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user-inscription',
  templateUrl: './user-inscription.component.html',
  styleUrls: ['./user-inscription.component.css'],
  providers: [UserService]
})
export class UserInscriptionComponent implements OnInit, AfterViewInit {

  @ViewChild('myAutofocus') private _focusElement: ElementRef;

  // Models
  info: Info;
  user: User;

  // Form
  username: string;
  password: string;
  email: string;

  constructor(private _userService: UserService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this._focusElement.nativeElement.focus();
  }

  signUp(): void {
    this.user = new User({
      username: this.username,
      password: this.password,
      email: this.email
    });
    this._userService.signUp(this.user)
      .subscribe(res => {
        if (res instanceof User) {
          this.user = res;
          this.info = new Info({
            message: 'Everything went well, check your emails for validation.',
            important: 'Inscription: ',
            type: 'success'
          });
        } else if (res instanceof Info) {
          this.info = res;
        }
      });
  }

  facebookClick(): void {
    this.info = new Info({
      message: 'Subscribing with your facebook account is not yet available .',
      important: 'Feature: ',
      type: 'warning',
    });
  }

  alertFinished(): void {
    this.info = null;
  }
}
