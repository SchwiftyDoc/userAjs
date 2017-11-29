import { Component, OnInit } from '@angular/core';
import { IInfo } from '../shared/info';

@Component({
  selector: 'app-user-inscription',
  templateUrl: './user-inscription.component.html',
  styleUrls: ['./user-inscription.component.css']
})
export class UserInscriptionComponent implements OnInit {

  info: IInfo;
  username: string;
  password: string;
  email: string;
  data: boolean = false;
  facebook: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  inscription(): void {
    this.info = {
      message: 'Error during connection to the database. Please contact administrator.',
      important: 'Database: ',
      type: 'error',
      delay: 4000,
      dismissable: true
    };
    this.data = !this.data;
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
