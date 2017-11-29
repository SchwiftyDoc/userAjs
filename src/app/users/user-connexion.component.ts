import { Component, OnInit } from '@angular/core';
import { IInfo } from '../shared/info';

@Component({
  selector: 'app-user-connexion',
  templateUrl: './user-connexion.component.html',
  styleUrls: ['./user-connexion.component.css'],
})
export class UserConnexionComponent implements OnInit {

  username: string;
  password: string;
  data: boolean = false;
  info: IInfo;

  constructor() { }

  ngOnInit() {
    console.log(this.info);
  }

  connexion(): void {
    this.info = {
      message: 'The username and the password don\'t match.',
      important: 'Database: ',
      type: 'error',
      delay: 4000,
      dismissable: true
    };
    this.data = !this.data;
  }

}
